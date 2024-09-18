"use client";

import React, { useState, useEffect } from 'react';

const images = [
  '/images/img-01.jpg',
  '/images/img-02.jpg',
//   '/images/img3.jpg',
//   '/images/img4.jpg'
];

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next Image Function
  const nextImage = () => {
    setIsFading(true); // Start fade out animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
      setIsFading(false); // Reset fade animation
    }, 500); // Duration of fade out before changing the image
  };

  // Previous Image Function
  const prevImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Go to the previous image
      setIsFading(false);
    }, 500);
  };

  return (
    <section id="team" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Image Gallery
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-gray-200">Happy Faces</h2>
          <p className="text-lg text-indigo-200/65">
            Explore the captured moments of our community during several events, seminars, and workshops.
          </p>
        </div>

        {/* Image Gallery Slider */}
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-lg">
            <div
              className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            >
              <img
                src={images[currentIndex]}
                alt="Gallery"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 bg-indigo-500/50 text-white rounded-full p-3 hover:bg-indigo-700/50"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 bg-indigo-500/50 text-white rounded-full p-3 hover:bg-indigo-700/50"
          >
            &#8594;
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-indigo-500' : 'bg-indigo-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Images;
