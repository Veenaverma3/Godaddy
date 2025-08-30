 import React from "react";
import marq1 from "../Component/Image/marq1.webp";
import marq2 from "../Component/Image/marq2.webp";
import marq3 from "../Component/Image/marq3.webp";
import marq4 from "../Component/Image/marq4.webp";
import marq5 from "../Component/Image/marq5.webp";
import marq6 from "../Component/Image/marq6.webp";
import marq7 from "../Component/Image/marq7.webp";

const Main2 = () => {
  const templates = [marq1, marq2, marq3, marq4, marq5, marq6, marq7];

  return (
    <div className="w-full text-center my-12 overflow-hidden bg-gray-100 py-10">
      {/* Heading */}
      <h1 className="text-2xl md:text-5xl font-serif font-semibold mb-4">
        Templates designed to sell.
      </h1>
      <h3 className="text-base md:text-xl font-medium text-gray-600 mb-10 px-4">
        Choose from 100s of designs for every idea and industry.
      </h3>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...templates, ...templates].map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 mx-3 sm:mx-4 group"
            >
              <img
                src={img}
                alt={`Template ${index + 1}`}
                className="w-[220px] h-[280px] sm:w-[280px] sm:h-[350px] md:w-[320px] md:h-[420px] lg:w-full lg:h-[480px] object-contain rounded-lg shadow-md"
              />
              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <button className="px-4 py-2 bg-white text-black text-sm md:text-md rounded-md hover:scale-105 transition w-32">
                  Start Editing
                </button>
                <button className="px-4 py-2 text-white text-sm md:text-md rounded-md hover:underline w-32 text-center">
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse All Button */}
      <div className="mt-10">
        <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800">
          Browse all templates
        </button>
      </div>
    </div>
  );
};

export default Main2;
