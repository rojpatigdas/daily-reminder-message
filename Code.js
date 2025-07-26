// Code.js
// Sends automated daily reminder messages to teams using Google Apps Script and Google Chat integration.
// Configure your webhook URL in the variable below. Do not commit real tokens to version control.

/**
 * Sends daily reminder messages to a Google Chat space using a webhook.
 * Messages are generated based on the current time and sent via HTTP POST.
 */
function sendNotification() {
  var messages = createMessagesBasedOnTime();
  if (!messages || messages.length === 0) return;

  var webhookUrl = "https://chat.googleapis.com/v1/spaces/AAAAAABBBB/messages?key=AIzaSyD-YourAPIKeyHere&token=YOUR_CHAT_TOKEN"; // TODO: Insert your Google Chat webhook URL here.

  messages.forEach(function(message) {
    var payload = {
      "text": message
    };

    var options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload)
    };

    // Send the POST request to Google Chat
    UrlFetchApp.fetch(webhookUrl, options);
  });
}

function createMessagesBasedOnTime() {
  var now = new Date();
  var day = now.getDay();       // Sunday = 0, Monday = 1, Tuesday = 2, …, Saturday = 6
  var hour = now.getHours();    // 0-23 hour format
  var minutes = now.getMinutes();

  var messages = [];
  // Array of day names corresponding to day number
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayName = dayNames[day];  // Convert numeric day to string

  // Monday to Friday schedule: days 1 to 5
  if (day >= 1 && day <= 5) {
    // Check if current time is between 9:00 and 9:29 AM
    if (hour === 9 && minutes < 30) {
      messages.push(
    "🌞 Good Morning Happy " + dayName + "!\n" +
    "1️⃣ First, tidy up your Inbox by moving tasks to either the Active or Waiting List sections.\n" +
    "2️⃣ Next, focus on just two tasks at a time—quality over quantity wins the race!\n" +
    "3️⃣ Lastly, log your meeting or huddle time to keep our progress on track.\n\n"
);

    }
  }

  return messages;
}
