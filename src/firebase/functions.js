// Cloud Functions for Google Sheets integration
// This file contains the Firebase Cloud Function code

// Note: This is a template for the Cloud Function
// You'll need to deploy this to Firebase Functions

const functions = require('firebase-functions');
const { google } = require('googleapis');

// Initialize Google Sheets API
const sheets = google.sheets({ version: 'v4' });

// Cloud Function to sync team registration data to Google Sheets
exports.syncTeamToSheets = functions.firestore
  .document('teams/{teamId}')
  .onCreate(async (snap, context) => {
    try {
      const teamData = snap.data();
      const teamId = context.params.teamId;

      // Prepare data for Google Sheets
      const rowData = [
        teamId,
        teamData.teamName,
        teamData.captain.name,
        teamData.captain.mobile,
        teamData.captain.age,
        teamData.viceCaptain.name,
        teamData.viceCaptain.mobile,
        teamData.viceCaptain.age,
        teamData.members.length,
        teamData.registrationDate.toDate().toLocaleString(),
        teamData.eventId || 'summer-championship-2024'
      ];

      // Add team members details
      teamData.members.forEach((member, index) => {
        rowData.push(`Member ${index + 1}: ${member.name} (${member.mobile}, Age: ${member.age})`);
      });

      // Append to Google Sheets
      await sheets.spreadsheets.values.append({
        spreadsheetId: 'YOUR_GOOGLE_SHEET_ID', // Replace with your Google Sheet ID
        range: 'Sheet1!A:K', // Adjust range as needed
        valueInputOption: 'RAW',
        resource: {
          values: [rowData]
        }
      });

      console.log(`Team ${teamData.teamName} synced to Google Sheets successfully`);
      return null;
    } catch (error) {
      console.error('Error syncing team to Google Sheets:', error);
      return null;
    }
  });

// Helper function to get Google Sheets authentication
async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'path/to/service-account-key.json', // Path to your service account key
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const authClient = await auth.getClient();
  google.options({ auth: authClient });
  return sheets;
}

module.exports = {
  syncTeamToSheets
};
