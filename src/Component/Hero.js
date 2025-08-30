 import React, { useEffect, useState } from "react";
import herovid from "../Component/Image/hp-inl-motion-marquee-desktop-v2.webm";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SCROLL_SPEED = 4; // higher = slower movement
  const moveUp = scrollY / SCROLL_SPEED;

  return (
    <div className="relative h-screen overflow-hidden top-8">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={herovid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center transition-all duration-300 px-4 sm:px-6"
        style={{ transform: `translateY(${-Math.floor(scrollY / 150) * 150}px)` }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 tracking-wider">
          GODADDY AIRO™
        </h1>

        <div className="max-w-full sm:max-w-xl md:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 sm:mb-3 md:mb-4 leading-tight">
            Get a .com for only ₹ 1.00* /1st y
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
            — includes Airo™
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 sm:mt-5 md:mt-7">
            3-year purchase required. Additional years ₹ 1,499.00*
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-xl text-black p-4 sm:p-6 w-full sm:w-10/12 md:w-7/12 mx-auto border flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 sm:mt-8 md:mt-28">
          <div className="mb-4 sm:mb-0">
            <div className="font-semibold px-2 sm:px-3">
              <p className="bg-purple-300 rounded-sm inline-block px-1 sm:px-2 py-0.5 sm:py-1">GoDaddy Airo™</p>
              <span className="text-base sm:text-lg md:text-xl ml-1 sm:ml-2">.com Domains</span>
            </div>
          </div>

          <div className="text-left sm:text-right inline-flex flex-col sm:flex-row items-start sm:items-center">
            <div className="mb-3 sm:mb-0 sm:mr-4">
              <span className="text-lg sm:text-xl md:text-xl font-bold">₹ 1.00*</span>
              <span className="text-lg sm:text-xl md:text-xl ml-1 sm:ml-2">/1st yr</span>
              <p className="text-sm sm:text-base text-gray-600">3-year purchase required</p>
            </div>
            <button className="bg-black text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 mt-2 sm:mt-0">
              Find Your .com
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div
        className="absolute inset-0 z-20 flex items-end justify-center"
        style={{
          transform: `translateY(${-moveUp}px)`,
        }}
      >
        <div className="text-center text-white px-4 sm:px-6 max-w-full sm:max-w-2xl md:max-w-3xl pb-6 sm:pb-8 md:pb-0">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            See how easy it is to bring your business to life
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
