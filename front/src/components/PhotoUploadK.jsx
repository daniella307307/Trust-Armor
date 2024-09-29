import React, { useState, useRef } from 'react';

const PhotoUpload = () => {
  const [image, setImage] = useState(null);
  const [submittedImageName, setSubmittedImageName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const [result, setResult] = useState(null); // State to display the result from the server
  const fileInputRef = useRef(null); // Reference to the file input

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setSubmittedImageName(file.name); // Set the image name
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      // Prepare the image file to be uploaded
      const formData = new FormData();
      formData.append('file', image);

      try {
        // Send the image to the Flask API
        const response = await fetch('http://157.173.127.178:5000/predict_malware', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        
        // Handle the API response
        if (response.ok) {
          setResult(data.result); // Set the malware prediction result
        } else {
          setResult(data.error || 'Error predicting malware');
        }

        setIsSubmitted(true); // Mark the image as submitted
        setImage(null); // Clear the image state

      } catch (error) {
        console.error('Error uploading image:', error);
        setResult('Error uploading image');
      }
    }
  };

  return (
    <div className="p-3 rounded">
      <h2 className="text-lg font-bold mb-2">Shyiramo Ifoto</h2>
      {!isSubmitted ? ( // Conditionally render input and form based on submission state
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden" // Hide the default input
            ref={fileInputRef} // Set the ref to the input
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()} // Trigger file input on button click
            className="mb-2 text-black rounded-lg px-2 py-1 w-32 border border-black border-[1px] bg-transparent"
          >
            Hitamo Ifoto
          </button>
          {!image && (
            <p className="text-red-600">Nta Ifoto Wahisemo</p> // Display message if no file is selected
          )}
          <button type="submit" className="mt-2 bg-purple-600 text-white rounded-lg px-4 py-2 w-full">
            Tanga Ifoto
          </button>
        </form>
      ) : (
        <p className="mt-4 text-green-600">Ifoto Watanze: {submittedImageName}</p>
      )}

      {result && ( // Display the result from the server (malware prediction)
        <p className={`mt-4 ${result === 'No malware detected' ? 'text-green-600' : 'text-red-600'}`}>
          {result === 'No malware detected' ? 'Ifoto iremewe(Nta malware yabonetse)' : `Ifoto yawe ntiyemewe(Malware Yabonetse): ${result}`}
        </p>
    
      )}

      {image && !isSubmitted && ( // Show the image name if one is selected but not yet submitted
        <p className="mt-4">Ifoto Wahisemo: {submittedImageName}</p>
      )}
    </div>
  );
};

export default PhotoUpload;

