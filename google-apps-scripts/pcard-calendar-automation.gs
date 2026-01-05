/**
 * Google Apps Script for McMurtry P-Card Calendar Auto-Population
 *
 * This script automatically creates and updates Google Calendar events when students
 * check out or return P-Cards through the Spring 2026 McExpenses Form.
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Calendar for P-Card availability (or use existing mcmsecretary@gmail.com calendar)
 * 2. Share the calendar with edit permissions to the account running this script
 * 3. Open the Spring 2026 McExpenses Form in Google Forms
 * 4. Click the three dots menu > Script editor
 * 5. If you already have the email notification script, add this code in the same file OR create a new script file
 * 6. Update the CALENDAR_ID constant below with your P-Card calendar ID
 * 7. Update the FORM_FIELD_MAPPING to match your form's exact question text
 * 8. The trigger can be shared with the email notification script (both run on form submit)
 * 9. Save and authorize the script with Calendar access permissions
 */

// ========== CONFIGURATION ==========

// IMPORTANT: Replace this with your P-Card Availability Calendar ID
// To find it: Open the calendar > Settings > Calendar settings > Calendar ID
// NOTE: If you get "Calendar not found" errors, make sure:
// 1. The calendar is shared with the account running this script (mcmurtrypresident@gmail.com) with "Make changes to events" permission
// 2. You've authorized the script to access Google Calendar (run testCalendarAccess() to authorize)
const CALENDAR_ID = 'bdd18a12e18cb6dc90287fb25f54978e20a6c6b9881d8b9300a196ecf12f5e42@group.calendar.google.com'; // Replace with actual P-Card calendar ID

//Update these field names to match your exact Google Form question text
const CALENDAR_FORM_FIELDS = {
  GROUP: 'What group is making the purchase?',
  ACTION_TYPE: 'Which of the following are you here to do?',
  PCARD_HOLDER: "Whose P-Card are you requesting? Check card availability here (NOTE: <— can be link to the calendar with the responses from the question up here ^). Ensure the card you want is actually available at the desired date & time.\n\nThe emails correspond to: Lilly Smith (Treasurer 1), Teresa Morgado (Treasurer 2), Berny Guerra Artur (President), and Carlos Cruz (Prime Minister).",
  PICKUP_DATE: 'What date and time do you hope to retrieve the P-Card? Do not request a date more than one week in advance.',
  EVENT: 'What event is your purchase for? Attach the event flyer here. (A screenshot of Gmail or GroupMe announcement will suffice.)',
  VENDOR: 'Where are you making the purchase? (It needs to be a tax-exempt location.)',
  BUDGET: 'Please provide an in-depth itemized budget estimate with the total at the top for your event, using dashes to separate the items:',
  PCARD_RETURNING: 'Whose P-Card are you returning?'
};

const CALENDAR_PCARD_HOLDERS = {
  'lcs16@rice.edu': 'Lilly Smith (Treasurer 1)',
  'mm275@rice.edu': 'Teresa Morgado (Treasurer 2)',
  'bgg1@rice.edu': 'Berny Guerra Arthur (President)',
  'cc211@rice.edu': 'Carlos Cruz (Prime Minister)'
};

// Default checkout duration in hours (if no return time specified)
const DEFAULT_CHECKOUT_DURATION = 24;

// ========== MAIN FUNCTION ==========

/**
 * Triggered when the form is submitted
 * Creates or updates calendar events based on P-Card checkout/return
 */
function onFormSubmitCalendar(e) {
  let responses = {};
  try {
    // Get form response
    const itemResponses = e.response.getItemResponses();
    const studentEmail = e.response.getRespondentEmail();

    // DEBUG: Log email to see if it's being captured
    Logger.log('DEBUG: Student email from form: ' + studentEmail);
    Logger.log('DEBUG: Email is undefined? ' + (studentEmail === undefined));
    Logger.log('DEBUG: Email is null? ' + (studentEmail === null));
    Logger.log('DEBUG: Email is empty string? ' + (studentEmail === ''));

    // Parse all responses into an object
    itemResponses.forEach(function(itemResponse) {
      const question = itemResponse.getItem().getTitle();
      const answer = itemResponse.getResponse();
      responses[question] = answer;
    });

    // Determine action type (checkout, return, online purchase)
    const actionType = responses[CALENDAR_FORM_FIELDS.ACTION_TYPE];

    // Process based on action type
    if (actionType && actionType.includes('Check out P-Card')) {
      createPCardCheckoutEvent(responses, studentEmail);
    } else if (actionType && actionType.includes('Return P-Card')) {
      updatePCardReturnEvent(responses, studentEmail);
    }
    // Online purchases don't need calendar events

  } catch (error) {
    Logger.log('Error in onFormSubmitCalendar: ' + error.toString());
    sendCalendarErrorNotification(error, responses);
  }
}

// ========== CALENDAR EVENT CREATION ==========

/**
 * Create a calendar event for P-Card checkout
 */
function createPCardCheckoutEvent(responses, studentEmail) {
  try {
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);

    if (!calendar) {
      throw new Error('Calendar not found. Check CALENDAR_ID configuration.');
    }

    const group = responses[CALENDAR_FORM_FIELDS.GROUP] || 'Unknown Group';
    const pcardHolderEmail = responses[CALENDAR_FORM_FIELDS.PCARD_HOLDER];
    const pcardHolder = CALENDAR_PCARD_HOLDERS[pcardHolderEmail] || pcardHolderEmail;
    const pickupDateStr = responses[CALENDAR_FORM_FIELDS.PICKUP_DATE];
    const event = responses[CALENDAR_FORM_FIELDS.EVENT] || 'Event not specified';
    const vendor = responses[CALENDAR_FORM_FIELDS.VENDOR] || 'Vendor not specified';
    const budget = responses[CALENDAR_FORM_FIELDS.BUDGET] || 'Budget not provided';

    // Parse pickup date (Google Forms datetime response)
    const pickupDate = new Date(pickupDateStr);

    if (isNaN(pickupDate.getTime())) {
      throw new Error('Invalid pickup date: ' + pickupDateStr);
    }

    // Calculate return date (default: 24 hours after pickup)
    const returnDate = new Date(pickupDate.getTime() + (DEFAULT_CHECKOUT_DURATION * 60 * 60 * 1000));

    // Create event title
    const eventTitle = `[${pcardHolder.split('(')[0].trim()}] - ${group}`;

    // Create event description
    const description = `P-CARD CHECKOUT

Requester: ${studentEmail}
Group: ${group}
Event: ${event}
Vendor: ${vendor}
Budget: ${budget}

Status: Checked Out
Expected Return: ${Utilities.formatDate(returnDate, Session.getScriptTimeZone(), 'MMMM dd, yyyy h:mm a')}

---
Auto-generated by McMurtry P-Card Management System`;

    // Create the calendar event
    const calendarEvent = calendar.createEvent(
      eventTitle,
      pickupDate,
      returnDate,
      {
        description: description,
        location: 'McMurtry College'
      }
    );

    // Store the event ID in script properties for later retrieval during return
    // Use student email + pickup date as unique key
    const eventKey = generateEventKey(studentEmail, pcardHolderEmail, pickupDate);
    PropertiesService.getScriptProperties().setProperty(eventKey, calendarEvent.getId());

    Logger.log('Calendar event created: ' + calendarEvent.getId());
    Logger.log('Event key: ' + eventKey);

  } catch (error) {
    Logger.log('Error creating calendar event: ' + error.toString());
    throw error;
  }
}

/**
 * Create calendar event when P-Card is returned
 */
function updatePCardReturnEvent(responses, studentEmail) {
  try {
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);

    if (!calendar) {
      throw new Error('Calendar not found. Check CALENDAR_ID configuration.');
    }

    const group = responses[CALENDAR_FORM_FIELDS.GROUP] || 'Unknown Group';
    const pcardReturningName = responses[CALENDAR_FORM_FIELDS.PCARD_RETURNING];

    // Map the display name to email - need to handle the form's return field format
    let pcardHolderEmail = pcardReturningName;
    let pcardHolder = pcardReturningName;

    // Try to find the email in CALENDAR_PCARD_HOLDERS
    for (const email in CALENDAR_PCARD_HOLDERS) {
      if (CALENDAR_PCARD_HOLDERS[email].includes(pcardReturningName) ||
          pcardReturningName.includes(email)) {
        pcardHolderEmail = email;
        pcardHolder = CALENDAR_PCARD_HOLDERS[email];
        break;
      }
    }

    const now = new Date();
    const oneHourLater = new Date(now.getTime() + (DEFAULT_CHECKOUT_DURATION * 60 * 60 * 1000));

    // Create event title matching the checkout format
    const eventTitle = `${group} returned [${pcardHolder.split('(')[0].trim()}]'s P-card`;

    // Create event description
    const description = `P-CARD RETURN

Returned by: ${studentEmail}
Group: ${group}
P-Card Holder: ${pcardHolder}
Return Time: ${Utilities.formatDate(now, Session.getScriptTimeZone(), 'MMMM dd, yyyy h:mm a')}

Status: Returned

---
Auto-generated by McMurtry P-Card Management System`;

    // Create the return event
    const returnEvent = calendar.createEvent(
      eventTitle,
      now,
      oneHourLater,
      {
        description: description,
        location: 'McMurtry College'
      }
    );

    // Set color to green to indicate return/completion
    returnEvent.setColor(CalendarApp.EventColor.GREEN);

    Logger.log('Return event created: ' + returnEvent.getId());

  } catch (error) {
    Logger.log('Error creating return event: ' + error.toString());
    throw error;
  }
}

// ========== UTILITY FUNCTIONS ==========

/**
 * Generate a unique key for storing event IDs
 */
function generateEventKey(studentEmail, pcardHolderEmail, pickupDate) {
  const timestamp = pickupDate.getTime();
  return `pcard_event_${studentEmail}_${pcardHolderEmail}_${timestamp}`;
}

/**
 * Send error notification if calendar automation fails
 */
function sendCalendarErrorNotification(error, responses) {
  const subject = 'ERROR: P-Card Calendar Automation Failed';
  const body = `
The P-Card calendar automation script encountered an error:

Error: ${error.toString()}
Stack: ${error.stack}

Form Response Data:
${JSON.stringify(responses, null, 2)}

Time: ${new Date().toString()}

Please check:
1. Calendar ID is correct
2. Script has permission to access the calendar
3. Calendar is shared with the script's account
4. Form field mapping is up to date

Calendar ID configured: ${CALENDAR_ID}
  `;

  try {
    MailApp.sendEmail({
      to: 'mcmsecretary@gmail.com', // Send error notification to secretary
      subject: subject,
      body: body
    });
  } catch (mailError) {
    Logger.log('Failed to send error notification email: ' + mailError.toString());
  }
}

// ========== MANUAL TESTING FUNCTIONS ==========

/**
 * AUTHORIZATION TRIGGER FUNCTION - RUN THIS FIRST!
 *
 * This function is specifically designed to trigger the Google Calendar authorization flow.
 *
 * TO AUTHORIZE CALENDAR ACCESS:
 * 1. In Apps Script editor, select this function from the dropdown at the top
 * 2. Click the "Run" button (play icon)
 * 3. A dialog will appear asking for permissions - click "Review permissions"
 * 4. Choose the account (mcmurtrypresident@gmail.com)
 * 5. You'll see "Google hasn't verified this app" - click "Advanced"
 * 6. Click "Go to [Project Name] (unsafe)"
 * 7. Click "Allow" to grant Calendar permissions
 * 8. Once authorized, run testCalendarAccess() to verify
 */
function authorizeCalendarAccess() {
  try {
    // This will trigger the authorization dialog
    var calendars = CalendarApp.getAllCalendars();
    Logger.log('Authorization successful!');
    Logger.log('You have access to ' + calendars.length + ' calendar(s)');
    Logger.log('Now run testCalendarAccess() to verify the specific calendar');
    return true;
  } catch (error) {
    Logger.log('Authorization failed: ' + error.toString());
    Logger.log('If you did not see a permission dialog, check:');
    Logger.log('1. You are signed in as mcmurtrypresident@gmail.com');
    Logger.log('2. Pop-ups are not blocked in your browser');
    Logger.log('3. Try running from the Apps Script editor (not from a trigger)');
    return false;
  }
}

/**
 * Create a fake form response for testing
 * Run this manually to test the calendar creation without submitting the actual form
 */
function createFakeFormResponse() {
  try {
    // Simulate form responses
    var fakeResponses = {};
    fakeResponses[CALENDAR_FORM_FIELDS.GROUP] = 'Test Group';
    fakeResponses[CALENDAR_FORM_FIELDS.ACTION_TYPE] = 'Check out P-Card';
    fakeResponses[CALENDAR_FORM_FIELDS.PCARD_HOLDER] = 'cc211@rice.edu'; // Carlos
    fakeResponses[CALENDAR_FORM_FIELDS.PICKUP_DATE] = 'January 20, 2026 14:00:00';
    fakeResponses[CALENDAR_FORM_FIELDS.EVENT] = 'Test Event';
    fakeResponses[CALENDAR_FORM_FIELDS.VENDOR] = 'Test Vendor';
    fakeResponses[CALENDAR_FORM_FIELDS.BUDGET] = 'Test budget: $100';

    // Fake student email (replace with your test email)
    var fakeStudentEmail = 'test@rice.edu';

    Logger.log('=== CREATING FAKE FORM RESPONSE ===');
    Logger.log('Student Email: ' + fakeStudentEmail);
    Logger.log('Group: ' + fakeResponses[CALENDAR_FORM_FIELDS.GROUP]);
    Logger.log('P-Card Holder: ' + fakeResponses[CALENDAR_FORM_FIELDS.PCARD_HOLDER]);
    Logger.log('');

    // Call the calendar creation function directly
    createPCardCheckoutEvent(fakeResponses, fakeStudentEmail);

    Logger.log('Fake form response processed successfully!');
    Logger.log('Check your calendar to see if the event was created');

    return true;
  } catch (error) {
    Logger.log('Error creating fake form response: ' + error.toString());
    return false;
  }
}

/**
 * List all calendars accessible to this script
 * Run this to find the correct calendar ID
 */
function listAllCalendars() {
  try {
    var calendars = CalendarApp.getAllCalendars();
    Logger.log('=== ALL ACCESSIBLE CALENDARS ===');
    Logger.log('Total calendars: ' + calendars.length);
    Logger.log('');

    for (var i = 0; i < calendars.length; i++) {
      Logger.log('Calendar #' + (i + 1));
      Logger.log('  Name: ' + calendars[i].getName());
      Logger.log('  ID: ' + calendars[i].getId());
      Logger.log('  Description: ' + calendars[i].getDescription());
      Logger.log('  Color: ' + calendars[i].getColor());
      Logger.log('');
    }

    Logger.log('=== INSTRUCTIONS ===');
    Logger.log('1. Find the P-Card calendar in the list above');
    Logger.log('2. Copy its ID');
    Logger.log('3. Replace the CALENDAR_ID constant at line 26 with the correct ID');
    Logger.log('4. Run testCalendarAccess() again to verify');

    return true;
  } catch (error) {
    Logger.log('Error listing calendars: ' + error.toString());
    return false;
  }
}

/**
 * Test function to verify calendar access
 * Run this AFTER authorizeCalendarAccess() completes successfully
 */
function testCalendarAccess() {
  try {
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);

    if (calendar) {
      Logger.log('SUCCESS: Calendar found - ' + calendar.getName());
      Logger.log('Calendar ID: ' + CALENDAR_ID);
      Logger.log('Calendar timezone: ' + calendar.getTimeZone());
      return true;
    } else {
      Logger.log('ERROR: Calendar not found with ID: ' + CALENDAR_ID);
      Logger.log('Make sure:');
      Logger.log('1. Calendar ID is correct');
      Logger.log('2. Calendar is shared with this script\'s account');
      Logger.log('3. You ran authorizeCalendarAccess() first');
      Logger.log('');
      Logger.log('TIP: Run listAllCalendars() to see all accessible calendars and find the correct ID');
      return false;
    }
  } catch (error) {
    Logger.log('ERROR accessing calendar: ' + error.toString());
    Logger.log('Did you run authorizeCalendarAccess() first?');
    return false;
  }
}

/**
 * Test function to create a sample event
 * Run this manually from the script editor to test
 */
function testCreateSampleEvent() {
  try {
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);

    const now = new Date();
    const oneHourLater = new Date(now.getTime() + (1 * 60 * 60 * 1000));

    const event = calendar.createEvent(
      '[TEST] Sample P-Card Checkout',
      now,
      oneHourLater,
      {
        description: 'This is a test event created by the P-Card automation script.',
        location: 'McMurtry College'
      }
    );

    Logger.log('SUCCESS: Test event created - ' + event.getId());
    Logger.log('Event title: ' + event.getTitle());
    Logger.log('Event start: ' + event.getStartTime());
    Logger.log('Event end: ' + event.getEndTime());

    // Clean up test event after 5 seconds
    Utilities.sleep(5000);
    event.deleteEvent();
    Logger.log('Test event deleted');

    return true;
  } catch (error) {
    Logger.log('ERROR creating test event: ' + error.toString());
    return false;
  }
}

// ==========================================================================
// INSTALLATION NOTES:
//
// If using BOTH email notification and calendar automation scripts:
// 1. You can combine both scripts in the same file
// 2. Call both functions from a single onFormSubmit trigger:
//
// function onFormSubmit(e) {
//   onFormSubmitEmail(e);        // From email notification script
//   onFormSubmitCalendar(e);     // From this calendar script
// }
//
// OR keep them separate with individual triggers - both will run on form submit
// ==========================================================================
