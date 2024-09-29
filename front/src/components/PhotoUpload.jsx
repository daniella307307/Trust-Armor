import React, { useState, useRef } from "react";

const PhotoUpload = () => {
  const [image, setImage] = useState(null);
  const [submittedImageName, setSubmittedImageName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState(null); // For displaying the malware prediction result
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setSubmittedImageName(file.name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      // Prepare the image file to be uploaded
      const formData = new FormData();
      formData.append("file", image);

      try {
        // Send the image to the Flask API
        const response = await fetch(
          "http://157.173.127.178:5000/predict_malware",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        // Handle the API response
        if (response.ok) {
          setResult(data.result); // Set the malware prediction result
        } else {
          setResult(data.error || "Error predicting malware");
        }

        setIsSubmitted(true);
        setImage(null); // Clear the image state
      } catch (error) {
        console.error("Error uploading image:", error);
        setResult("Error uploading image");
      }
    }
  };

  return (
    <div className="p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Upload Image</h2>
      {!isSubmitted ? (
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
            onClick={() => fileInputRef.current.click()}
            className="mb-2 text-black rounded-lg px-2 py-1 w-32 border border-black border-[1px] bg-transparent"
          >
            Choose an image
          </button>
          {!image && <p className="text-red-600">None chosen</p>}
          <button
            type="submit"
            className="mt-2 bg-purple-600 text-white rounded-lg px-4 py-2 w-full"
          >
            Submit
          </button>
        </form>
      ) : (
        <p className="mt-4 text-green-600">
          Submitted Image: {submittedImageName}
        </p>
      )}
      {image &&
        !isSubmitted && ( // Show the image preview before submission
          <div className="mt-4">
            <img
              src={URL.createObjectURL(image)}
              alt="Selected Preview"
              className="max-w-full max-h-56 object-contain" // Limit image size
            />
          </div>
        )}
      {result && (
        <p
          className={`mt-4 ${
            result === "No malware detected" ? "text-green-600" : "text-red-600"
          }`}
        >
          {result === "No malware detected"
            ? result
            : "Malware detected in the Image"}
        </p>
      )}
    </div>
  );
};

export default PhotoUpload;
