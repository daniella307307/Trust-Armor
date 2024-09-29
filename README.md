# Trust-Armor
a powerful web extension designed to provide immediate malware detection and protection while you browse
TrustArmor - Malicious URL and Web Content Detection
TrustArmor is a browser extension designed to protect users from malicious URLs and other harmful web content. It integrates with a backend server to analyze URLs in real-time, notifying users of potential threats before loading web pages.

Features
Real-Time URL Scanning: Scans URLs before loading them to detect whether they are malicious.
Notification Alerts: Provides visual and audible alerts for malicious URLs, allowing users to proceed with caution or return to safety.
Safe Browsing: Notifies users when a URL is deemed safe, giving confidence in their web navigation.
Browser Extension: Lightweight browser extension that seamlessly integrates with Chrome.
Rate Limiting: Groq APIs are rate limited to 30 requests per minute to prevent overloading.
How It Works
When the user clicks the scan button in the browser extension, the extension retrieves the active tab's URL.
The URL is sent to the Flask backend for analysis using a POST request.
Based on the response from the backend, the extension will:
Notify the user if the URL is safe.
Alert the user if the URL is deemed malicious, providing options to proceed with caution or return to the previous page.

Technologies
Chrome Extension: The front-end browser extension built using JavaScript.
Flask Backend: A Flask API server that receives URL inputs and returns analysis results.
Notification System: Browser notification with buttons for user actions on malicious URLs.
FontAwesome: Used for icons within the extension's UI.
Setup Instructions

Prerequisites
Google Chrome (for testing and using the extension)
Python 3.8+ (for running the Flask backend)
Flask and other Python dependencies listed in requirements.txt
Browser Extension Installation
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/Trust-Armor.git
Open Chrome and navigate to chrome://extensions/.

Enable Developer Mode using the toggle on the top-right corner.

Click Load unpacked and select the directory where you cloned the repository.

The TrustArmor extension will be installed, and you will see the TrustArmor icon in the browser toolbar.

Flask Backend Setup
Navigate to the backend folder and install the necessary dependencies:

bash
Copy code
pip install -r requirements.txt
Run the Flask server locally:

bash
Copy code
python app.py
The backend will be running on http://localhost:5000.

If deploying the backend remotely, update the extension’s manifest.json to include the correct backend URL (e.g., http://157.173.127.178:5000/).

Example Workflow
Scanning URLs: When you click the scan button in the extension popup, the current URL is sent to the backend for analysis.

Notification System: If a URL is detected as malicious, the user will receive an alert with an option to proceed anyway or return to safety.


Files and Structure

trustarmor-extension/
├── background.j                # Background script to listen for URL updates
├── contentScript.js              # Script injected into pages to scan URLs
├── manifest.json                 # Configuration file for V
├── trustarmor.html               # Popup HTML file for the extension
├── popup.js                      # JavaScript to handle use Icons
├── ta_name.png                   # Extension logo
├── ta_only_bg.png                # Extension icon
                 # Folder for Flask backend
├── server.py                    # Main Flask server code ├── requirements.txt          # Python dependencies
Key Components
manifest.json: The configuration file for the Chrome extension, defining permissions and settings.
background.js: Listens for tab updates and interacts with the backend for URL analysis.
contentScript.js: Scans the content of loaded pages.
popup.js: Handles user actions within the extension popup.
Permissions
The following permissions are used in the extension:

activeTab: Allows access to the URL of the current active tab.
notifications: Provides the ability to show notifications to users.
webRequest & webRequestBlocking: Allows the extension to monitor and intercept web requests.
Backend API Endpoints
/predict: Receives a URL via POST and returns whether the URL is malicious or safe.
/train: Option to trigger model training for URL analysis (future enhancement).
Future Enhancements
File Upload Scanning: Add the capability to scan files for malware using AI models.
Expanded Threat Categories: Improve detection by categorizing phishing, defacement, and other threats.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch with your changes.
Submit a pull request for review.
License
This project is licensed under the MIT License. See the LICENSE file for details.
