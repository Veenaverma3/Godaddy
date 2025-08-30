 import React, { useState } from "react";
import img from "../Component/Image/b1.webp";
import img2 from "../Component/Image/hpimg.avif";
import img3 from "../Component/Image/img22.avif";

const Main1 = () => {
  const [hovered, setHovered] = useState(null);

  // Default main image (when no hover)
  const defaultImg = img;

  // Map hovered index to image
  const images = {
    1: img,
    2: img2,
    3: img3,
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
      {/* Main Heading */}
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-center mb-8 leading-snug">
        Start local, work global, and scale with Microsoft 365
      </h2>

      {/* Image Section */}
     <div className="flex justify-center h-auto mt-10 lg:h-[500px] mb-10 ">
  <img
    src={hovered ? images[hovered] : defaultImg}
    alt="Microsoft 365"
    className="rounded-lg shadow-lg w-full sm:w-10/12 md:w-9/12 lg:w-[1199px] h-auto max-h-[500px] object-contain transition-transform duration-500 ease-in-out hover:scale-105 "
  />
</div>



      {/* Three Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
        {/* 1st Column */}
        <div
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          className="bg-white shadow-md rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:bg-gray-200 transition cursor-pointer text-left"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">
            Show credibility with a professional email
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Customers are more likely to select a business that uses a
            domain-based email, such as{" "}
            <span className="font-mono">you@yourdomain.com</span>. With cloud
            access, your latest emails, contacts, and calendars are consistently
            updated and accessible from any device.
          </p>
        </div>

        {/* 2nd Column */}
        <div
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          className="bg-white shadow-md rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:bg-gray-200 transition cursor-pointer text-left"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">
            Access files stored in the cloud from anywhere
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Enjoy peace of mind with 1 TB of OneDrive storage. Your files,
            photos, and videos are stored in the cloud and accessible from your
            preferred device.
          </p>
        </div>

        {/* 3rd Column */}
        <div
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          className="bg-white shadow-md rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:bg-gray-200 transition cursor-pointer text-left"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">
            Discover the benefits of the best apps
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Use collaborative tools such as Word, Excel, PowerPoint, and Teams
            to enhance your work experience and achieve results.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="px-5 py-3 bg-black text-white rounded-lg text-sm sm:text-base md:text-lg font-medium shadow-md hover:text-red-500 transition">
          Choose your plan
        </button>
      </div>
    </div>
  );
};

export default Main1;
