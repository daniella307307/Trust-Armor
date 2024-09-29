chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url && tab.url.startsWith("http")) {
    setTimeout(function() {
      chrome.tabs.sendMessage(tabId, { action: "analyzeUrl", tabId: tabId, url: tab.url }, function(response) {
        if (chrome.runtime.lastError) {
          console.error("Error sending message:", chrome.runtime.lastError.message);
        } else {
          console.log("Message sent successfully:", response);
        }
      });
    }, 1000); 
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Received message in background script:", request);
  if (request.action === "analyzeUrl") {
    console.log("Analyzing URL:", request.url);
    analyzeUrl(request.url, request.tabId);
    sendResponse({ status: "URL analysis started" });
  } else if (request.action === "trainModel") {
    console.log("Training model...");
    fetch('http://157.173.127.178:5000/train', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("Model trained:", data);
    })
    .catch(err => {
      console.error("Error training model:", err);
    });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Received message in background script:", request);
  if (request.action === "analyzeUrl") {
    console.log("Analyzing URL:", request.url);
    analyzeUrl(request.url, request.tabId);
    sendResponse({ status: "URL analysis started" });
  }
});

function analyzeUrl(url, tabId) {
  console.log("Sending POST request to /predict:", url);
  fetch('http://157.173.127.178:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Received response:", data);
    const result = data.result;
    if (result === 'malicious' ) { // || result === 'phishing' || result === 'defacement'
      notifyUser(tabId, "Malicious Link Detected", `This site is categorized as ${result}. Proceed with caution.`, true, url);
    } else {
      notifyUser(tabId, "Safe Link", `This site is categorized as ${result}.`, false, url);
    }
  })
  .catch(err => {
    console.error("Error analyzing URL:", err);
    notifyUser(tabId, "Analysis Error", "Unable to analyze this site. Try again later.", false, url);
  });
}

function notifyUser(tabId, title, message, isMalicious, url) {
  console.log("Notifying user:", title, message);
  chrome.notifications.create({
    type: "basic",
    iconUrl: "ta_name.png",
    title: title,
    message: message,
    buttons: isMalicious ? [{ title: "Proceed Anyway" }, { title: "Go Back" }] : [],
  }, function (notificationId) {
    chrome.notifications.onButtonClicked.addListener(function (notifId, buttonIndex) {
      if (notifId === notificationId) {
        if (buttonIndex === 0) {
          chrome.tabs.update(tabId, { url: url });
        } else if (buttonIndex === 1) {
          chrome.tabs.goBack(tabId);
        }
      }
    });
  });
}
