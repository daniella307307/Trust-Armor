import React, { useState } from "react";

const URLInput = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url) {
      onSubmit(url); // Pass the URL to parent
      setUrl(""); // Clear the input
    }
  };

  return (
    <div className="p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Shyiramo inzira</h2>
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
          Tanga
        </button>
      </form>
    </div>
  );
};

export default URLInput;

