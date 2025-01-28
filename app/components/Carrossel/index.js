import { useState } from "react";
import { BgImage } from "../BgImage";
import { IconBack } from "../icons/IconBack";
import { IconNext } from "../icons/IconNext";

export const Carrossel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return images.length === 1 
  ? (<img src={images[0]} className="w-full max-h-[400px]" />)
  : (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full max-h-[400px] object-cover transition-transform duration-300 ease-in-out"
        />
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 border bg-opacity-10 backdrop-blur-sm shadow-md text-white rounded-sm h-10 w-10 focus:outline-none"
        onClick={handlePrev}
      >
        <div className="h-full w-full flex justify-center items-center"> <IconBack /></div>
        
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 border bg-opacity-10 backdrop-blur-sm shadow-md text-white rounded-sm h-10 w-10 focus:outline-none"
        onClick={handleNext}
      >
        <div className="h-full w-full flex justify-center items-center"> <IconNext /></div>
        
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
