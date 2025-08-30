 import React from "react";

const Review = () => {
  return (
    <div className=" mt-20 w-full flex flex-col md:flex-row items-center justify-center gap-6 py-6">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <p className="text-sm  mb-2">
          Our customers say
          <span className="text-xl font-semibold ml-3">Excellent</span>
        </p>
      </div>

      {/* Vertical Line (visible divider) */}
      <div className="hidden md:inline w-px h-10 bg-gray-300"></div>

      {/* Rating Section */}
 <div className="flex flex-col md:flex-row items-center justify-center gap-2">
  {/* Stars */}
  <div className="flex items-center gap-1">
    <span className="bg-green-500 text-white text-xl px-1 rounded">&#9733;</span>
    <span className="bg-green-500 text-white text-xl px-1 rounded">&#9733;</span>
    <span className="bg-green-500 text-white text-xl px-1 rounded">&#9733;</span>
    <span className="bg-green-500 text-white text-xl px-1 rounded">&#9733;</span>
    <span className="bg-green-500 text-white text-xl px-1 rounded">&#9733;</span>
  </div>

  {/* Text */}
  <span className="text-xs md:text-sm">
    (4.5 out of 5 stars based on{" "}
    <span className="font-semibold">123,987 reviews</span>)
  </span>
</div>
 
      {/* Vertical Line */}
      <div className="hidden md:block w-px h-10 bg-gray-300"></div>

      {/* Trustpilot Section */}
      <div className="flex items-center gap-2">
        <span className="text-3xl text-green-500 font-bold">&#9733;</span>
        <span className="text-lg md:text-xl font-semibold">Trustpilot</span>
      </div>
    </div>
  );
};

export default Review;
