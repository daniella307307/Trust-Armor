import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = () => {
  // Array of 3 images
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state to track hovering

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 // Increment to show next image
    );
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Decrement to show previous image
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

  return (
    <div id="Urugendo" className="flex items-center justify-center space-x-4">
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
    </div>
  );
};

export default ImageCarousel;
