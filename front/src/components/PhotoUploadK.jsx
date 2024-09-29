import React, { useState, useRef } from 'react';

const PhotoUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [submittedImageName, setSubmittedImageName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const fileInputRef = useRef(null); // Reference to the file input

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setSubmittedImageName(file.name); // Set the image name
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      onUpload(imageUrl);
      setIsSubmitted(true); // Set submitted state to true
      setImage(null); // Clear the image state
    }
  };

  return (
    <div className="p-3 rounded">
      <h2 className="text-lg font-bold mb-2">Shyiramo ifoto</h2>
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
            className="mb-2 text-black rounded-lg px-2 py-1 w-32 border border-black border-[1px] bg-transparent" // Smaller width and padding
          >
            Hitamo ifoto
          </button>
          {!image && (
            <p className="text-red-600">Nta foto wahisemo</p> // Display message if no file is selected
          )}
          <button type="submit" className="mt-2 bg-purple-600 text-white rounded-lg px-4 py-2 w-full">
            Tanga
          </button>
        </form>
      ) : (
        <p className="mt-4 text-green-600">Ifoto Watanze: {submittedImageName}</p>
      )}
      {image && !isSubmitted && ( // Show the image name instead of the preview
        <p className="mt-4">Ifoto Wahisemo: {submittedImageName}</p>
      )}
    </div>
  );
};

export default PhotoUpload;
