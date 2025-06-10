import React, { useEffect, useState } from 'react';

const images = [
  "images/slide1.avif",
  "/images/slide 2.avif",
  "/images/slide 3.jpg",
  "/images/slide 4.avif",
  "/images/slide 5.avif"
];

const SlideImage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#D6C078] w-full py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition duration-700 ease-in-out rounded-lg"
          />

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-white' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideImage;
