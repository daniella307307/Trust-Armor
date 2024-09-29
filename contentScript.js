console.log("Content script loaded");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Content script received message:", request);
  if (request.action === "analyzeUrl") {
    analyzeUrl(request.url, request.tabId);
    sendResponse({ status: "URL analyzed" });
  } else if (request.action === "analysisComplete") {
    hideLoadingIndicator();
  } else {
    console.error("Unknown action:", request.action);
  }
});

function analyzeUrl(url, tabId) {
  console.log("Analyzing URL in content script:", url);
  showLoadingIndicator();
  chrome.runtime.sendMessage({ action: "analyzeUrl", tabId: tabId, url: url });
}

function showLoadingIndicator() {
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loading-indicator';
  loadingDiv.style.position = 'fixed';
  loadingDiv.style.top = '10px';
  loadingDiv.style.right = '45%';
  loadingDiv.style.padding = '10px';
  loadingDiv.style.backgroundColor = 'yellow';
  loadingDiv.style.color = 'black';
  loadingDiv.style.borderRadius = '10px'; 
  loadingDiv.style.zIndex = '1000';
  loadingDiv.style.opacity = '0'; 
  loadingDiv.style.transform = 'scale(0.5)'; 
  loadingDiv.style.transition = 'opacity 0.5s, transform 0.5s'; 
  loadingDiv.innerText = 'Analyzing URL...';
  document.body.appendChild(loadingDiv);

  
  setTimeout(function() {
    loadingDiv.style.opacity = '1';
    loadingDiv.style.transform = 'scale(1)';
  }, 100);

  
  setTimeout(function() {
    loadingDiv.style.opacity = '0';
    loadingDiv.style.transform = 'scale(0.5)';
    setTimeout(function() {
      document.body.removeChild(loadingDiv);
    }, 500);
  }, 2000);
}
