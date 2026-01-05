/**
 * Google Apps Script for McMurtry P-Card Email Notifications
 *
 * This script sends automated email notifications to P-Card holders when they submit
 * a P-Card request through the Spring 2026 McExpenses Form.
 *
 * SETUP INSTRUCTIONS:
 * 1. Open the Spring 2026 McExpenses Form in Google Forms
 * 2. Click the three dots menu > Script editor
 * 3. Delete any existing code and paste this script
 * 4. Update the FORM_FIELD_MAPPING object below to match your form's exact question text
 * 5. Click "Triggers" (clock icon) > Add Trigger
 * 6. Choose: onFormSubmit, From form, On form submit
 * 7. Save and authorize the script
 */

// ========== CONFIGURATION ==========
// Update these field names to match your exact Google Form question text
var FORM_FIELD_MAPPING = {
  GROUP: 'What group is making the purchase?',
  ACTION_TYPE: 'Which of the following are you here to do?',
  // Checkout fields
  PCARD_HOLDER: "Whose P-Card are you requesting? Check card availability here (NOTE: <— can be link to the calendar with the responses from the question up here ^). Ensure the card you want is actually available at the desired date & time.\n\nThe emails correspond to: Lilly Smith (Treasurer 1), Teresa Morgado (Treasurer 2), Berny Guerra Artur (President), and Carlos Cruz (Prime Minister).",
  PICKUP_DATE: 'What date and time do you hope to retrieve the P-Card? Do not request a date more than one week in advance.',
  EVENT_CHECKOUT: 'What event is your purchase for? Attach the event flyer here. (A screenshot of Gmail or GroupMe announcement will suffice.)',
  VENDOR: 'Where are you making the purchase? (It needs to be a tax-exempt location.)',
  BUDGET_CHECKOUT: 'Please provide an in-depth itemized budget estimate with the total at the top for your event, using dashes to separate the items:',
  // Return fields
  TOTAL_PURCHASE: 'What was the total purchase amount? (Enter a number, no dollar sign)',
  RECEIPT: 'Attach your itemized receipt here. Note that the receipt MUST include line items-- it cannot be a general lump sum.',
  PCARD_RETURNING: 'Whose P-Card are you returning?',
  ADDITIONAL_INFO_RETURN: 'Do you have any additional info you feel we might need to know/did you collaborate with any other group(s)? If not, write "N/A".',
  // Online purchase fields
  TOTAL_ONLINE: 'What is the total purchase amount? (Enter a number, no dollar sign)',
  EVENT_ONLINE: 'What event is your purchase for? Attach the event flyer here. (a screenshot of Gmail or GroupMe announcement will suffice)',
  STUDENT_NAME: 'What student would you like for the package to be checked under?',
  ITEMS_LINKS: 'The item(s), amount per item and link(s) that you\'d like for us to purchase:',
  ADDITIONAL_INFO_ONLINE: 'Do you have any additional info you feel we might need to know/did you collaborate with any other group(s)? If not, write "N/A".'
};

var PCARD_HOLDERS = {
  'lcs16@rice.edu': 'Lilly Smith (Treasurer 1)',
  'mm275@rice.edu': 'Teresa Morgado (Treasurer 2)',
  'bgg1@rice.edu': 'Berny Guerra Arthur (President)',
  'cc211@rice.edu': 'Carlos Cruz (Prime Minister)'
};

// Map form display names to email addresses
var PCARD_HOLDER_NAME_TO_EMAIL = {
  'Lilly (Treasurer 1)': 'lcs16@rice.edu',
  'Teresa (Treasurer 2)': 'mm275@rice.edu',
  'Carlos (Prime Minister)': 'cc211@rice.edu',
  'Berny (President)': 'bgg1@rice.edu'
};

var WEBSITE_LINKS = {
  INSTRUCTIONS: 'https://docs.google.com/document/d/1-llnzRe77eGoSR3YYUXibkdSi_lBrjjwQBNqKUCfYRc/edit?usp=drivesdk',
  CALENDAR: 'https://mcmurtrycollege.org/resources/pcardmanagement',
  VENDORS: 'https://docs.google.com/document/d/1DTBWkO9k0MB0wAhD42sM4_pUgH6ok2MGPZdtFhy3Qg8/edit'
};

var CONTACT_EMAIL = 'mcmsecretary@gmail.com';
var TREASURER_EMAILS = ['lcs16@rice.edu', 'mm275@rice.edu']; // Treasurers who handle returns and online purchases

// IMPORTANT: After deploying as Web App, replace with your deployment URL
// Deploy: Deploy > New deployment > Web app > Execute as: Me, Access: Anyone with link
var WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwxF7f3ew6PPpLlokAOBmp1gkODyABcF__eeJDAwqQrx4asgOjYambTokCeNDVLiOfYRg/exec'; // Updated: removed /a/macros/rice.edu/ to avoid iframe restrictions

// Spreadsheet ID for storing P-Card requests (create a new Google Sheet and paste its ID here)
// Get ID from URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
var REQUESTS_SHEET_ID = '1jw23qXM8PTS-iOHBBu6PN9czrcsisZAm1IQncD1vwus';


// ========== WEB APP HANDLERS ==========

/**
 * Handle GET requests (Approve / Decline buttons)
 */

function doGet(e) {
  var action = e.parameter.action;
  var requestId = e.parameter.id;

  if (!requestId) {
    return HtmlService.createHtmlOutput('<h3 style="color:red;">Invalid request.</h3>')
           .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  if (action === 'approve') {
    return HtmlService.createHtmlOutput(buildApprovalPage(requestId, WEB_APP_URL))
           .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  if (action === 'decline') {
    markDeclined(requestId);
    return HtmlService.createHtmlOutput('\
      <div style="font-family:Arial;padding:30px;text-align:center;">\
        <h2 style="color:#8B6FC7;">Request Declined</h2>\
        <p>The P-Card request has been declined.</p>\
        <p>The student will be notified.</p>\
      </div>\
    ').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  return HtmlService.createHtmlOutput('<h3>Unknown action.</h3>')
         .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Handle POST requests (Approval form submission with lockbox code)
 */
function doPost(e) {
  var htmlOutput;
  
  try {
    var requestId = e.parameter.requestId;
    var code = e.parameter.code;
    
    var request = getRequest(requestId); 
    if (request) {
      markApproved(requestId, code);
      sendApprovalEmailToStudent(request, code);
    }

    // Prepare the success page
    htmlOutput = HtmlService.createHtmlOutput(
        '<html><body style="font-family: Arial; text-align: center; padding-top: 50px;">' +
        '<h1 style="color: #28a745;">✓ Request Approved</h1>' +
        '<p>The code has been sent to the student. You may close this tab.</p>' +
        '</body></html>'
      );

  } catch (error) {
    // Prepare the error page if something fails
    htmlOutput = HtmlService.createHtmlOutput("<html><body><h2>Error</h2><p>" + error.toString() + "</p></body></html>");
  }

  // CRITICAL: This line tells Google to allow the display in any frame/redirect
  return htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
/**
 * Build the approval page HTML (where P-Card holder enters lockbox code)
 */
function buildApprovalPage(requestId, WEB_APP_URL) {
  var request = getRequest(requestId);

  if (!request) {
    return '<h3 style="color:red;">Request not found.</h3>';
  }

  if (request.status !== 'PENDING') {
    return '\
      <div style="font-family:Arial;padding:30px;text-align:center;">\
        <h3 style="color:#dc3545;">Request Already ' + request.status + '</h3>\
        <p>This request was already processed.</p>\
      </div>\
    ';
  }

  return '\
    <html>\
      <head>\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <style>\
          body {\
            font-family: Arial, sans-serif;\
            padding: 30px;\
            background: #f5f5f5;\
            margin: 0;\
          }\
\
          .container {\
            max-width: 500px;\
            margin: 0 auto;\
            background: white;\
            padding: 30px;\
            border-radius: 8px;\
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\
          }\
\
          h2 {\
            color: #8B6FC7;\
            margin-top: 0;\
            font-size: 24px;\
          }\
\
          .details {\
            background: #f9f9f9;\
            padding: 15px;\
            border-left: 4px solid #8B6FC7;\
            margin: 20px 0;\
          }\
\
          .details p {\
            margin: 5px 0;\
          }\
\
          form {\
            width: 100%;\
          }\
\
          label {\
            font-weight: bold;\
            font-size: 16px;\
            margin-bottom: 8px;\
            display: block;\
          }\
\
          input[type="text"], input[type="password"] {\
            font-size: 18px;\
            padding: 10px;\
            width: 100%;\
            border: 2px solid #8B6FC7;\
            border-radius: 4px;\
            margin-bottom: 15px;\
            box-sizing: border-box;\
          }\
\
          button {\
            background: #28a745;\
            color: #fff;\
            padding: 12px 24px;\
            border: none;\
            border-radius: 5px;\
            font-size: 16px;\
            cursor: pointer;\
            font-weight: bold;\
            width: 100%;\
            box-sizing: border-box;\
          }\
\
          button:hover {\
            background: #218838;\
          }\
\
          /* Responsive Design */\
          @media (max-width: 600px) {\
            body {\
              padding: 15px;\
            }\
\
            .container {\
              padding: 20px;\
            }\
\
            h2 {\
              font-size: 20px;\
            }\
\
            input[type="text"], input[type="password"], button {\
              font-size: 16px;\
            }\
          }\
        </style>\
      </head>\
\
      <body>\
        <div class="container">\
          <h2>P-Card Approval</h2>\
\
          <div class="details">\
            <p><strong>Student:</strong> ' + request.studentEmail + '</p>\
            <p><strong>Group:</strong> ' + request.group + '</p>\
            <p><strong>Pickup Date:</strong> ' + request.pickupDate + '</p>\
            <p><strong>Vendor:</strong> ' + request.vendor + '</p>\
          </div>\
\
          <form method="post" action="' + WEB_APP_URL + '">\
            <input type="hidden" name="requestId" value="' + requestId + '" />\
\
            <label for="code">Enter Lockbox Code:</label>\
            <input type="text" id="code" name="code" required placeholder="e.g., 1234" />\
\
            <button type="submit">✓ Approve & Email Student</button>\
          </form>\
        </div>\
      </body>\
    </html>\
  ';
}

// ========== MAIN FUNCTION ==========

/**
 * Triggered when the form is submitted
 * Sends confirmation email to the student who submitted the request
 */
function onFormSubmit(e) {
  try {
    // Get form response
    var itemResponses = e.response.getItemResponses();
    var responses = {};

    // Parse all responses into an object
    itemResponses.forEach(function(itemResponse) {
      var question = itemResponse.getItem().getTitle();
      var answer = itemResponse.getResponse();
      responses[question] = answer;
    });

    // Determine action type (checkout, return, online purchase)
    var actionType = responses[FORM_FIELD_MAPPING.ACTION_TYPE];
    var studentEmail = e.response.getRespondentEmail();
    // Send appropriate email based on action type
    if (actionType && actionType.includes('Check out P-Card')) {
      sendCheckoutConfirmationEmail(responses, studentEmail);
    } else if (actionType && actionType.includes('Return P-Card')) {
      sendReturnConfirmationEmail(responses, studentEmail);
    } else if (actionType && actionType.includes('online purchase')) {
      sendOnlinePurchaseConfirmationEmail(responses, studentEmail);
    }

  } catch (error) {
    Logger.log('Error in onFormSubmit: ' + error.toString());
    // Optionally send error notification to admin
    sendErrorNotification(error);
  }
}




// ========== EMAIL TEMPLATES ==========

/**
 * Send confirmation email for P-Card checkout requests
 */
function sendCheckoutConfirmationEmail(responses, studentEmail) {
  
  var group = responses[FORM_FIELD_MAPPING.GROUP] || 'N/A';
  // var pcardHolderEmail = responses[FORM_FIELD_MAPPING.PCARD_HOLDER];
  var pcardHolderEmail = 'as610@rice.edu'
  var pcardHolder = PCARD_HOLDERS[pcardHolderEmail] || pcardHolderEmail;
  var pickupDate = responses[FORM_FIELD_MAPPING.PICKUP_DATE] || 'N/A';
  var eventFileIds = responses[FORM_FIELD_MAPPING.EVENT_CHECKOUT] || [];
  var vendor = responses[FORM_FIELD_MAPPING.VENDOR] || 'N/A';
  var budget = responses[FORM_FIELD_MAPPING.BUDGET_CHECKOUT] || 'N/A';

  // Generate unique request ID
  var requestId = Utilities.getUuid();

  // Save request to Google Sheet
  saveRequest({
    id: requestId,
    studentEmail: studentEmail,
    group: group,
    pcardHolderEmail: pcardHolderEmail,
    pcardHolder: pcardHolder,
    pickupDate: pickupDate,
    vendor: vendor,
    budget: budget,
    status: 'PENDING',
    timestamp: new Date().toString()
  });

  // Get event flyer attachments from Google Drive
  var attachments = [];
  var eventDescription = 'Event flyer attached';

  try {
    if (Array.isArray(eventFileIds) && eventFileIds.length > 0) {
      eventFileIds.forEach(function(fileId) {
        try {
          var file = DriveApp.getFileById(fileId);
          attachments.push(file.getBlob());
        } catch (e) {
          Logger.log('Could not retrieve file: ' + fileId);
        }
      });
    } else if (typeof eventFileIds === 'string' && eventFileIds !== 'N/A') {
      // Single file ID as string
      try {
        var file = DriveApp.getFileById(eventFileIds);
        attachments.push(file.getBlob());
      } catch (e) {
        Logger.log('Could not retrieve file: ' + eventFileIds);
        eventDescription = eventFileIds; // Use as text if not a valid file ID
      }
    } else {
      eventDescription = 'No event flyer provided';
    }
  } catch (e) {
    Logger.log('Error processing event flyer: ' + e.toString());
    eventDescription = 'Event flyer could not be retrieved';
  }

  var event = attachments.length > 0 ? eventDescription : (eventFileIds || 'N/A');

  var subject = 'P-Card Checkout Request from ' + group;

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #8B6FC7; border-bottom: 3px solid #8B6FC7; padding-bottom: 10px;">' +
    'P-Card Checkout Request by ' + studentEmail +
    '</h2>' +
    '<p>Dear ' + pcardHolder + ',</p>' +
    '<p>There is a P-Card checkout request which was submitted by ' + studentEmail + '.</p>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Request Details</h3>' +
    '<p><strong>Group:</strong> ' + group + '</p>' +
    '<p><strong>P-Card Requested:</strong> ' + pcardHolder + '</p>' +
    '<p><strong>Pickup Date/Time:</strong> ' + pickupDate + '</p>' +
    '<p><strong>Contact Email:</strong> ' + studentEmail + '</p>' +
    '<p><strong>Event:</strong> ' + event + '</p>' +
    '<p><strong>Vendor:</strong> ' + vendor + '</p>' +
    '<p><strong>Budget:</strong><br/>' + budget.replace(/\n/g, '<br/>') + '</p>' +
    '</div>' +
    '<div style="margin: 30px 0; text-align: center;">' +
    '<a href="' + WEB_APP_URL + '?action=approve&id=' + requestId + '"' +
    ' style="background:#28a745;color:#fff;padding:14px 22px;text-decoration:none;border-radius:6px;font-weight:bold;margin-right:10px;display:inline-block;">' +
    '✓ Approve & Send Code' +
    '</a>' +
    '<a href="' + WEB_APP_URL + '?action=decline&id=' + requestId + '"' +
    ' style="background:#dc3545;color:#fff;padding:14px 22px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;">' +
    '✗ Decline Request' +
    '</a>' +
    '</div>' +
    '<h3 style="color: #8B6FC7;">Next Steps</h3>' +
    '<ul>' +
    '<li>Please review this request</li>' +
    '<li>Upon approval, the student will receive an email at <strong>' + studentEmail + '</strong> with the lockbox code</li>' +
    '<li>Check <a href="' + WEBSITE_LINKS.CALENDAR + '">P-Card availability</a> to confirm the card is available</li>' +
    '<li>**Remember to submit a return form when you\'re done with the card**</li>' +
    '</ul>' +
    '<h3 style="color: #8B6FC7;">Important Reminders</h3>' +
    '<ul>' +
    '<li>Keep all receipts for your purchases</li>' +
    '<li>Only purchase from <a href="' + WEBSITE_LINKS.VENDORS + '">tax-exempt vendors</a></li>' +
    '<li>Return the P-Card as soon as possible after your purchase</li>' +
    '</ul>' +
    '<div style="background-color: #FFF3CD; padding: 15px; border-left: 4px solid #FFD700; margin: 20px 0;">' +
    '<p style="margin: 0;"><strong>Questions or concerns?</strong></p>' +
    '<p style="margin: 5px 0 0 0;">Contact the McMurtry secretaries at <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></p>' +
    '</div>' +
    '<h3 style="color: #8B6FC7;">Helpful Resources</h3>' +
    '<ul>' +
    '<li><a href="' + WEBSITE_LINKS.INSTRUCTIONS + '">P-Card Instructions & Guidelines</a></li>' +
    '<li><a href="' + WEBSITE_LINKS.VENDORS + '">Tax-Exempt Vendors List</a></li>' +
    '<li><a href="' + WEBSITE_LINKS.CALENDAR + '">P-Card Availability Calendar</a></li>' +
    '</ul>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated confirmation from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  var plainBody = 'P-Card Checkout Request - McMurtry College\n\n' +
    'Hi there,\n\n' +
    'Your P-Card checkout request has been successfully submitted and is being processed.\n\n' +
    'REQUEST DETAILS:\n' +
    '- Group: ' + group + '\n' +
    '- P-Card Requested: ' + pcardHolder + '\n' +
    '- Pickup Date/Time: ' + pickupDate + '\n' +
    '- Contact Email: ' + studentEmail + '\n' +
    '- Event: ' + event + '\n' +
    '- Vendor: ' + vendor + '\n' +
    '- Budget: ' + budget + '\n\n' +
    'NEXT STEPS:\n' +
    '- The P-Card holder will review your request\n' +
    '- Upon approval, you\'ll receive an email at ' + studentEmail + ' with the lockbox code\n' +
    '- Check P-Card availability: ' + WEBSITE_LINKS.CALENDAR + '\n' +
    '- Remember to submit a return form when you\'re done with the card\n\n' +
    'IMPORTANT REMINDERS:\n' +
    '- Keep all receipts for your purchases\n' +
    '- Only purchase from tax-exempt vendors: ' + WEBSITE_LINKS.VENDORS + '\n' +
    '- Return the P-Card as soon as possible after your purchase\n\n' +
    'Questions or concerns?\n' +
    'Contact the McMurtry secretaries at ' + CONTACT_EMAIL + '\n\n' +
    'HELPFUL RESOURCES:\n' +
    '- P-Card Instructions: ' + WEBSITE_LINKS.INSTRUCTIONS + '\n' +
    '- Tax-Exempt Vendors: ' + WEBSITE_LINKS.VENDORS + '\n' +
    '- P-Card Calendar: ' + WEBSITE_LINKS.CALENDAR + '\n\n' +
    '---\n' +
    'This is an automated confirmation from McMurtry College.\n' +
    'McMurtry College | Rice University';

  // Send email to the P-Card holder only
  var emailOptions = {
    to: pcardHolderEmail,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody
  };

  // Add attachments if available
  if (attachments.length > 0) {
    emailOptions.attachments = attachments;
  }

  MailApp.sendEmail(emailOptions);

  Logger.log('Checkout confirmation email sent to: ' + pcardHolderEmail);
}

/**
 * Send confirmation email for P-Card return
 */
function sendReturnConfirmationEmail(responses, studentEmail) {
  var group = responses[FORM_FIELD_MAPPING.GROUP] || 'N/A';
  var pcardReturningName = responses[FORM_FIELD_MAPPING.PCARD_RETURNING] || 'N/A';
  var totalPurchase = responses[FORM_FIELD_MAPPING.TOTAL_PURCHASE] || 'N/A';
  var additionalInfo = responses[FORM_FIELD_MAPPING.ADDITIONAL_INFO_RETURN] || 'N/A';

  // Get the email of the P-Card holder being returned to
  var pcardHolderEmail = PCARD_HOLDER_NAME_TO_EMAIL[pcardReturningName];
  var pcardHolder = PCARD_HOLDERS[pcardHolderEmail] || pcardReturningName;

  var subject = 'P-Card Return from ' + group;

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #8B6FC7; border-bottom: 3px solid #8B6FC7; padding-bottom: 10px;">' +
    'P-Card Return by ' + studentEmail +
    '</h2>' +
    '<p>Dear ' + pcardHolder + ',</p>' +
    '<p>' + studentEmail + ' has returned your P-Card.</p>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Return Details</h3>' +
    '<p><strong>Group:</strong> ' + group + '</p>' +
    '<p><strong>Student Email:</strong> ' + studentEmail + '</p>' +
    '<p><strong>Total Purchase Amount:</strong> $' + totalPurchase + '</p>' +
    '<p><strong>Additional Info:</strong> ' + additionalInfo + '</p>' +
    '<p>Please check the receipt attachment(s) for itemized purchase details.</p>' +
    '</div>' +
    '<p>If you have any questions about this return, please contact <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>.</p>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated confirmation from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  // Get receipt attachments from Google Drive
  var attachments = [];
  var receiptFileIds = responses[FORM_FIELD_MAPPING.RECEIPT] || [];

  try {
    if (Array.isArray(receiptFileIds) && receiptFileIds.length > 0) {
      receiptFileIds.forEach(function(fileId) {
        try {
          var file = DriveApp.getFileById(fileId);
          attachments.push(file.getBlob());
        } catch (e) {
          Logger.log('Could not retrieve receipt file: ' + fileId);
        }
      });
    } else if (typeof receiptFileIds === 'string' && receiptFileIds !== 'N/A') {
      // Single file ID as string
      try {
        var file = DriveApp.getFileById(receiptFileIds);
        attachments.push(file.getBlob());
      } catch (e) {
        Logger.log('Could not retrieve receipt file: ' + receiptFileIds);
      }
    }
  } catch (e) {
    Logger.log('Error processing receipt: ' + e.toString());
  }

  // Send email to the P-Card holder and student
  var emailOptions = {
    to: pcardHolderEmail + ',' + studentEmail,
    subject: subject,
    htmlBody: htmlBody
  };

  // Add attachments if available
  if (attachments.length > 0) {
    emailOptions.attachments = attachments;
  }

  MailApp.sendEmail(emailOptions);

  Logger.log('Return confirmation email sent to: ' + pcardHolderEmail + ' and ' + studentEmail);
}

/**
 * Send confirmation email for online purchase requests
 */
function sendOnlinePurchaseConfirmationEmail(responses, studentEmail) {
  var group = responses[FORM_FIELD_MAPPING.GROUP] || 'N/A';
  var totalAmount = responses[FORM_FIELD_MAPPING.TOTAL_ONLINE] || 'N/A';
  var eventFileIds = responses[FORM_FIELD_MAPPING.EVENT_ONLINE] || [];
  var studentName = responses[FORM_FIELD_MAPPING.STUDENT_NAME] || 'N/A';
  var items = responses[FORM_FIELD_MAPPING.ITEMS_LINKS] || 'N/A';

  // Get event flyer attachments from Google Drive
  var attachments = [];
  var eventDescription = 'Event flyer attached';

  try {
    if (Array.isArray(eventFileIds) && eventFileIds.length > 0) {
      eventFileIds.forEach(function(fileId) {
        try {
          var file = DriveApp.getFileById(fileId);
          attachments.push(file.getBlob());
        } catch (e) {
          Logger.log('Could not retrieve file: ' + fileId);
        }
      });
    } else if (typeof eventFileIds === 'string' && eventFileIds !== 'N/A') {
      // Single file ID as string
      try {
        var file = DriveApp.getFileById(eventFileIds);
        attachments.push(file.getBlob());
      } catch (e) {
        Logger.log('Could not retrieve file: ' + eventFileIds);
        eventDescription = eventFileIds; // Use as text if not a valid file ID
      }
    } else {
      eventDescription = 'No event flyer provided';
    }
  } catch (e) {
    Logger.log('Error processing event flyer: ' + e.toString());
    eventDescription = 'Event flyer could not be retrieved';
  }

  var event = attachments.length > 0 ? eventDescription : (eventFileIds || 'N/A');

  var subject = 'Online Purchase Request from ' + group;

  var htmlBody =  '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #8B6FC7; border-bottom: 3px solid #8B6FC7; padding-bottom: 10px;">' +
    'Online Purchase Request Confirmed' +
    '</h2>' +
    '<p>Hi there,</p>' +
    '<p>Your online purchase request has been submitted successfully.</p>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Request Details</h3>' +
    '<p><strong>Group:</strong> ' + group + '</p>' +
    '<p><strong>Total Amount:</strong> $' + totalAmount + '</p>' +
    '<p><strong>Event:</strong> ' + event + '</p>' +
    '<p><strong>Package Recipient:</strong> ' + studentName + '</p>' +
    '<p><strong>Items Requested:</strong><br/>' + items.replace(/\n/g, '<br/>') + '</p>' +
    '<p><strong>Additional Info:</strong> ' + additionalInfo + '</p>' +
    '</div>' +
    '<h3 style="color: #8B6FC7;">Next Steps</h3>' +
    '<ul>' +
    '<li>Please review the request</li>' +
    '<li>Contact '+studentEmail+' if additional information is needed</li>' +
    '</ul>' +

    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated confirmation from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  // Send email to treasurers only
  var emailOptions = {
    to: TREASURER_EMAILS.join(','),
    subject: subject,
    htmlBody: htmlBody
  };

  // Add attachments if available
  if (attachments.length > 0) {
    emailOptions.attachments = attachments;
  }

  MailApp.sendEmail(emailOptions);

  Logger.log('Online purchase confirmation email sent to treasurers');
}

/**
 * Send error notification to admin if script fails
 */
function sendErrorNotification(error) {
  var subject = 'ERROR: P-Card Form Script Failed';
  var body = 'The P-Card email notification script encountered an error:\n\n' +
    'Error: ' + error.toString() + '\n' +
    'Stack: ' + error.stack + '\n\n' +
    'Time: ' + new Date().toString() + '\n\n' +
    'Please check the script and form configuration.';

  MailApp.sendEmail({
    to: 'as610@rice.edu',
    subject: subject,
    body: body
  });
}

// ========== GOOGLE SHEETS STORAGE FUNCTIONS ==========

/**
 * Save P-Card request to Google Sheet
 */
function saveRequest(requestData) {
  try {
    var sheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID).getSheetByName('Requests');

    if (!sheet) {
      throw new Error('Sheet "Requests" not found. Please create a sheet named "Requests" in your spreadsheet.');
    }

    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Request ID',
        'Timestamp',
        'Student Email',
        'Group',
        'P-Card Holder Email',
        'P-Card Holder',
        'Pickup Date',
        'Vendor',
        'Budget',
        'Status',
        'Lockbox Code',
        'Approval Timestamp'
      ]);
    }

    // Add request row
    sheet.appendRow([
      requestData.id,
      requestData.timestamp,
      requestData.studentEmail,
      requestData.group,
      requestData.pcardHolderEmail,
      requestData.pcardHolder,
      requestData.pickupDate,
      requestData.vendor,
      requestData.budget,
      requestData.status,
      '', // Lockbox code (empty until approved)
      ''  // Approval timestamp (empty until approved)
    ]);

    Logger.log('Request saved to sheet: ' + requestData.id);
  } catch (error) {
    Logger.log('Error saving request to sheet: ' + error.toString());
  }
}

/**
 * Get P-Card request from Google Sheet by ID
 */
function getRequest(requestId) {
  try {
    var sheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID).getSheetByName('Requests');

    if (!sheet) {
      return null;
    }

    var data = sheet.getDataRange().getValues();

    // Find request by ID (column 0)
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === requestId) {
        return {
          id: data[i][0],
          timestamp: data[i][1],
          studentEmail: data[i][2],
          group: data[i][3],
          pcardHolderEmail: data[i][4],
          pcardHolder: data[i][5],
          pickupDate: data[i][6],
          vendor: data[i][7],
          budget: data[i][8],
          status: data[i][9],
          lockboxCode: data[i][10],
          approvalTimestamp: data[i][11],
          rowIndex: i + 1 // Store row index for updates
        };
      }
    }

    return null;
  } catch (error) {
    Logger.log('Error getting request from sheet: ' + error.toString());
    return null;
  }
}

/**
 * Mark request as APPROVED
 */
function markApproved(requestId, lockboxCode) {
  try {
    var sheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID).getSheetByName('Requests');
    var request = getRequest(requestId);

    if (request && request.rowIndex) {
      sheet.getRange(request.rowIndex, 10).setValue('APPROVED'); // Status column
      sheet.getRange(request.rowIndex, 11).setValue(lockboxCode); // Lockbox code column
      sheet.getRange(request.rowIndex, 12).setValue(new Date().toString()); // Approval timestamp

      Logger.log('Request marked as APPROVED: ' + requestId);
    }
  } catch (error) {
    Logger.log('Error marking request as approved: ' + error.toString());
  }
}

/**
 * Mark request as DECLINED
 */
function markDeclined(requestId) {
  try {
    var sheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID).getSheetByName('Requests');
    var request = getRequest(requestId);

    if (request && request.rowIndex) {
      sheet.getRange(request.rowIndex, 10).setValue('DECLINED'); // Status column
      sheet.getRange(request.rowIndex, 11).setValue('');
      sheet.getRange(request.rowIndex, 12).setValue(new Date().toString()); // Decline timestamp

      // Send decline notification to student
      sendDeclineEmailToStudent(request);

      Logger.log('Request marked as DECLINED: ' + requestId);
    }
  } catch (error) {
    Logger.log('Error marking request as declined: ' + error.toString());
  }
}

/**
 * Send approval email to student with lockbox code
 */
function sendApprovalEmailToStudent(request, lockboxCode) {
  var subject = 'P-Card Request Approved - Lockbox Code';

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #28a745; border-bottom: 3px solid #28a745; padding-bottom: 10px;">' +
    '✓ P-Card Request Approved' +
    '</h2>' +
    '<p>Hi there,</p>' +
    '<p>Great news! Your P-Card checkout request has been <strong>approved</strong>.</p>' +
    '<div style="background-color: #d4edda; padding: 20px; border-left: 4px solid #28a745; margin: 20px 0; text-align: center;">' +
    '<p style="margin: 0; font-size: 14px; color: #155724;">Your Lockbox Code:</p>' +
    '<p style="margin: 10px 0 0 0; font-size: 32px; font-weight: bold; color: #155724;">' + lockboxCode + '</p>' +
    '</div>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Your Request Details</h3>' +
    '<p><strong>Group:</strong> ' + request.group + '</p>' +
    '<p><strong>P-Card Owner:</strong> ' + request.pcardHolder + '</p>' +
    '<p><strong>Pickup Date:</strong> ' + request.pickupDate + '</p>' +
    '<p><strong>Vendor:</strong> ' + request.vendor + '</p>' +
    '</div>' +
    '<h3 style="color: #8B6FC7;">Next Steps</h3>' +
    '<ol>' +
    '<li>Use code <strong>' + lockboxCode + '</strong> to retrieve the P-Card from the lockbox</li>' +
    '<li>Make your purchase at ' + request.vendor + '</li>' +
    '<li>Keep all itemized receipts</li>' +
    '<li>Return the P-Card to the lockbox ASAP</li>' +
    '<li>Submit the return form with receipts</li>' +
    '</ol>' +
    '<div style="background-color: #FFF3CD; padding: 15px; border-left: 4px solid #FFD700; margin: 20px 0;">' +
    '<p style="margin: 0;"><strong>Important Reminders:</strong></p>' +
    '<ul style="margin: 10px 0 0 0;">' +
    '<li>Only purchase from tax-exempt vendors</li>' +
    '<li>Get itemized receipts (not general lump sums)</li>' +
    '<li>Do not hand off the P-Card to anyone else</li>' +
    '</ul>' +
    '</div>' +
    '<p>Questions? Contact <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></p>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated message from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  MailApp.sendEmail({
    to: request.studentEmail,
    subject: subject,
    htmlBody: htmlBody
  });

  Logger.log('Approval email sent to student: ' + request.studentEmail);
}

/**
 * Send decline notification to student
 */
function sendDeclineEmailToStudent(request) {
  var subject = 'P-Card Request Declined';

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #dc3545; border-bottom: 3px solid #dc3545; padding-bottom: 10px;">' +
    'P-Card Request Declined' +
    '</h2>' +
    '<p>Hi there,</p>' +
    '<p>Unfortunately, your P-Card checkout request has been declined.</p>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Request Details</h3>' +
    '<p><strong>Group:</strong> ' + request.group + '</p>' +
    '<p><strong>P-Card:</strong> ' + request.pcardHolder + '</p>' +
    '<p><strong>Pickup Date:</strong> ' + request.pickupDate + '</p>' +
    '<p><strong>Vendor:</strong> ' + request.vendor + '</p>' +
    '</div>' +
    '<p>If you have questions about this decision, please contact the P-Card holder or McMurtry leadership:</p>' +
    '<ul>' +
    '<li>P-Card Holder: <a href="mailto:' + request.pcardHolderEmail + '">' + request.pcardHolder + '</a></li>' +
    '<li>McMurtry Secretaries: <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></li>' +
    '</ul>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated message from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  MailApp.sendEmail({
    to: request.studentEmail,
    subject: subject,
    htmlBody: htmlBody
  });

  Logger.log('Decline email sent to student: ' + request.studentEmail);
}
