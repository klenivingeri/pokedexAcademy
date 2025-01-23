import { useState } from "react";
import { BgImage } from "../BgImage";

export const Carrossel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return images.length === 1 
  ? (<BgImage image={images[0]} size='h-[200px]' />)
  : (
<div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out"
        />
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 border bg-opacity-10 backdrop-blur-sm shadow-md text-white rounded-sm p-2 h-10 w-10 focus:outline-none"
        onClick={handlePrev}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 border bg-opacity-10 backdrop-blur-sm shadow-md text-white rounded-sm p-2 h-10 w-10 focus:outline-none"
        onClick={handleNext}
      >
        ▶
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
