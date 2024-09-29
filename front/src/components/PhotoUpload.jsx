import React, { useState, useRef } from 'react';

const PhotoUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [submittedImageName, setSubmittedImageName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const fileInputRef = useRef(null);

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
    <div className="p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Upload Image</h2>
      {!isSubmitted ? ( // Conditionally render input and form based on submission state
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            ref={fileInputRef}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()} // Trigger file input on button click
            className="mb-2 text-black rounded-lg px-2 py-1 w-32 border border-black border-[1px] bg-transparent" // Smaller width and padding
          >
            Choose an image
          </button>
        {!image && (
          <p className="text-red-600">None chosen</p> // Display message if no file is selected
        )}
        <button type="submit" className="mt-2 bg-purple-600 text-white rounded-lg px-4 py-2 w-full">
          Submit
        </button>
      </form>
    ) : (
      <p className="mt-4 text-green-600">Submitted Image: {submittedImageName}</p>
    )}
    {image && !isSubmitted && ( // Show the image name instead of the preview
      <p className="mt-4">Chosen image: {submittedImageName}</p>
    )}
  </div>
);
};

export default PhotoUpload;
