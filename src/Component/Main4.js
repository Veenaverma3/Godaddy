 import React from "react";
import { Phone, Globe } from "lucide-react"; // using lucide-react icons
import img1 from "../Component/Image/main42.webp";
import img2 from "../Component/Image/main4,1.webp";
import img3 from "../Component/Image/main4,2.webp";

const Main4 = () => {
  return (
    <div className="w-11/12 mx-auto text-center py-8 md:py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal font-serif mb-3 md:mb-4">
  Why work with GoDaddy?
</h2>
<h3 className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
  84+ million domains, 22 million customers, millions of websites, email
  and security — we help grow businesses.
</h3>


      {/* Unified Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* First Box */}
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img src={img1} alt="Domain Selection" className="w-full object-cover" />
          <div className="absolute inset-0 flex items-start justify-center px-3 py-4 md:px-6 md:py-10">
            <p className="text-white text-sm sm:text-base md:text-3xl font-bold text-left">
              .com to .xyz — a huge selection from the largest domain registrar
            </p>
          </div>
        </div>

        {/* Second Box */}
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img src={img2} alt="Security" className="w-full object-cover" />
          <div className="absolute inset-0 flex items-start px-3 py-4 md:px-6 md:py-10">
            <p className="text-white text-sm sm:text-base md:text-3xl font-semibold text-left">
              Zzzz... security to help you sleep easy every night
            </p>
          </div>
        </div>

        {/* Third Box */}
        <div className="flex flex-col items-start justify-center bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-10 shadow-md">
          <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-cyan-400 mb-3 md:mb-4" />
          <p className="text-sm sm:text-base md:text-3xl font-bold text-left">
            More than URLs. 21+ million trust us for their domains and more.
          </p>
        </div>

        {/* Fourth Box */}
        <div className="flex flex-col items-start justify-center bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-10 shadow-md">
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-cyan-400 mb-3 md:mb-4" />
          <p className="text-sm sm:text-base md:text-3xl font-bold text-left">
            We&apos;re here with the help and advice you need. <br />
            Call us for award-winning support.
          </p>
        </div>

        {/* Fifth Box (col-span-2 after md) */}
        <div className="relative rounded-2xl overflow-hidden shadow-md md:col-span-2">
          <img src={img3} alt="Tools for Business" className="w-full object-cover" />
          <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-black sm:bg-white/70  p-2 sm:p-3 md:p-4 rounded-lg w-1/2  md:max-w-sm">
            <p className="text-xs sm:text-base md:text-3xl font-bold text-left ">
              Tools for every small business first — website, email, marketing,
              and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main4;
