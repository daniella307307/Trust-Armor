import React, { useState } from "react";
import PhotoUpload from "./PhotoUploadK";
import URLInput from "./URLInputK";

const MainComponent = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleImageUpload = (imageUrl) => {
    setUploadedImage(imageUrl); // Set the uploaded image URL
  };

  const handleUrlSubmit = (url) => {
    setSubmittedUrl(url); // Set the submitted URL
  };

  return (
    <div id="Gushyiraho" className="flex space-x-4 p-6">
      {/* Left Side - Photo Upload */}
      <div className="flex-1 border border-black p-4 h-64 flex flex-col items-center justify-between">
        <PhotoUpload onUpload={handleImageUpload} />
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="mt-4" />}
      </div>

      {/* Right Side - URL Input */}
      <div className="flex-1 border border-black p-4 h-64 flex flex-col items-center justify-between">
        <URLInput onSubmit={handleUrlSubmit} />
        {submittedUrl && <p className="mt-4">Inzira yatanzwe: {submittedUrl}</p>}
      </div>
    </div>
  );
};

export default MainComponent;
