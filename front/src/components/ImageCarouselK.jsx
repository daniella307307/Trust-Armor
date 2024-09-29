import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = () => {
  // Array of images
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg", // Add as many images as you want
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state to track hovering

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Decrement for right-to-left
    );
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 // Increment for right-to-left
    );
  };

  // Auto navigate images every 3 seconds, unless paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  // Calculate the indices for the side images
  const nextIndex = (currentIndex + 1) % images.length; // Next image
  const prevIndex = (currentIndex - 1 + images.length) % images.length; // Previous image

  return (
    <div id="Urugendo" className="flex items-center justify-center space-x-4">
      {/* Previous image */}
      <img
        src={images[prevIndex]}
        alt="Previous"
        className="h-96 w-72 object-cover rounded-lg opacity-70 border-8 border-gray-500/50" // Increased image size (h-96, w-72)
      />

      {/* Chevron left */}
      <FaChevronLeft
        onClick={prevSlide}
        className="cursor-pointer text-5xl text-black"
      />

      {/* Current (main) image */}
      <img
        src={images[currentIndex]}
        alt="Main"
        className="h-[450px] w-[350px] object-cover rounded-lg border-8 border-gray-500/50" // Larger main image size (h-450px, w-350px)
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume when hover ends
      />

      {/* Chevron right */}
      <FaChevronRight
        onClick={nextSlide}
        className="cursor-pointer text-5xl text-black"
      />

      {/* Next image */}
      <img
        src={images[nextIndex]}
        alt="Next"
        className="h-96 w-72 object-cover rounded-lg opacity-70 border-8 border-gray-500/50" // Increased image size (h-96, w-72)
      />
    </div>
  );
};

export default ImageCarousel;
