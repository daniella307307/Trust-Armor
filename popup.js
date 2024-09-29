document.getElementById('scanBtn').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Scanning...';

    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];
        let url = activeTab.url;

        // Send the URL to your Flask backend for prediction
        fetch('http://157.173.127.178:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'malicious') {
                    resultDiv.textContent = 'Warning: Malicious URL detected!';
                } else {
                    resultDiv.textContent = 'This URL is safe.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.textContent = 'Error occurred during scanning.';
            });
    });
});
