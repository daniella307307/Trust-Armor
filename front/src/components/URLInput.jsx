import React, { useState } from "react";

const URLInput = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(""); // For displaying the result
  const [error, setError] = useState(null); // For handling errors

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (url) {
      try {
        // Send the URL to the Flask API for scanning
        const response = await fetch("http://157.173.127.178:5000/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }), // Send the URL in the request body
        });

        const data = await response.json();

        // Check if the response is OK and display the result
        if (response.ok) {
          setResult(`The URL is ${data.result}`);
        } else {
          setError(data.error || "An error occurred during URL prediction");
        }

        setUrl(""); // Clear the input field
      } catch (err) {
        console.error("Error while scanning URL:", err);
        setError("Failed to connect to the server.");
      }
    }
  };

  return (
    <div className="p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Enter a URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="border rounded-lg p-2 w-full"
          required
        />
        <button type="submit" className="mt-2 bg-purple-600 text-white rounded-lg px-4 py-2 w-full">
          Submit
        </button>
      </form>

      {/* Display the result */}
      {result && <p className="mt-4 text-green-600">{result}</p>}
      
      {/* Display error if any */}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default URLInput;


