# Google Apps Scripts for McMurtry P-Card System

This folder contains Google Apps Scripts that automate the McMurtry College P-Card management system.

## Files

### `pcard-email-notification.gs`
Automated email notification system for the Spring 2026 McExpenses Form. Handles three types of requests:
- **P-Card Checkout**: Sends approval request to P-Card holder with approve/decline buttons
- **P-Card Return**: Notifies P-Card holder when their card is returned with receipts
- **Online Purchase**: Notifies treasurers of online purchase requests

### `pcard-lockbox-manager.gs`
Web interface for managing the P-Card lockbox system. Provides a dashboard to:
- View all P-Card holders and their current lockbox codes
- Generate and update lockbox codes
- Track P-Card availability status

## Setup
See the header comments in each file for detailed setup instructions.

## Updates for Next Semester

When creating new versions for future semesters, update the following in **both files**:

1. **P-Card holder names and emails** (lines 42-46 in email notification, similar section in lockbox manager):
   - Update `PCARD_HOLDERS` object with new treasurer/officer emails
   - Update `PCARD_HOLDER_NAME_TO_EMAIL` mapping with new display names (lines 50-54)

2. **Contact emails** (line 63):
   - Update `CONTACT_EMAIL` for the current secretaries
   - Update `TREASURER_EMAILS` array with new treasurer emails (line 64)

3. **Spreadsheet ID** (line 65 in email notification):
   - Create a new Google Sheet for the new semester
   - Replace `REQUESTS_SHEET_ID` with the new sheet's ID

4. **Web App URL** (line 61 in email notification):
   - After making changes, redeploy as a new web app (top right of app script)
   - Update `WEB_APP_URL` with the new deployment URL (copy from new deployment)

5. **Form field mappings** (lines 19-38):
   - Only update if form question text changes
   - Match exact wording from the Google Form
