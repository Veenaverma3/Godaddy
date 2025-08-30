 import React from "react";
import img from "../Component/Image/j2.avif";
import logo from "../Component/Image/gd-guides-logo (1).svg";
import img2 from "../Component/Image/j1.avif";

const Main5 = () => {
  return (
    <div className="relative w-full flex flex-col md:block">
      {/* Mobile Image */}
      <img
        src={img2}
        alt="Mobile Main"
        className="w-full h-[400px] object-cover object-center md:hidden"
      />

      {/* Desktop Image */}
      <img
        src={img}
        alt="Desktop Main"
        className="hidden md:block w-full h-[550px] object-cover object-top"
      />

      {/* Top-left Text on Image */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 p-4 md:p-8 text-black">
        <h2 className="text-lg md:text-2xl font-semibold">Suraiya J.</h2>
        <p className="text-xs md:text-base">GoDaddy Guide</p>
      </div>

      {/* Right Side Info Box */}
      <div
        className="relative md:absolute md:top-1/2 md:right-28 md:-translate-y-1/2 
                    p-6 md:p-10 w-full md:w-[660px] 
                   flex flex-col justify-around min-h-[350px] md:min-h-[400px]"
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-4 md:mb-6">
          <img src={logo} alt="GoDaddy" className="w-28 md:w-40" />
        </div>

        {/* Heading */}
        <h2 className="text-xl md:text-5xl font-bold font-serif text-gray-900 mb-3 md:mb-4">
          Why go with GoDaddy?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-xl mb-4 md:mb-6 leading-relaxed">
          Because we know that even the best technology is only as good as the
          people behind it. That’s why we offer expert support, plus a lot more.
        </p>

        {/* Button */}
        <button className="bg-black w-full md:w-1/3 text-base md:text-xl text-white px-4 py-3 md:py-4 rounded-lg font-medium hover:bg-gray-800 transition">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default Main5;
