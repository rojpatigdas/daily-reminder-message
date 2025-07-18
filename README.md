# Daily Reminder Message

This project sends automated daily reminder messages to teams using Google Apps Script and Google Chat integration.

## Features
- Generates and sends daily reminders based on schedule
- Integrates with Google Chat via webhook

## Setup
1. Replace the placeholder webhook URL in the code with your own Google Chat webhook.
2. Deploy the Apps Script to run on a schedule (time-driven trigger).

## Security Notice
- Do NOT commit real webhook URLs or tokens to version control.
- All sensitive values should be managed securely and are excluded via `.gitignore`. 