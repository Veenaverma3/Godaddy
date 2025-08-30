 import React, { useState } from "react";
import p1 from "../Component/Image/p1,1.webp";
import p2 from "../Component/Image/p1,2.webp";
import p3 from "../Component/Image/p1,3.webp";
import d1 from "../Component/Image/r1.webp";
import d2 from "../Component/Image/r2.webp";
import d3 from "../Component/Image/r3.webp";
import q1 from "../Component/Image/w1.webp";
import q2 from "../Component/Image/w2.webp";

const Priorties = () => {
  const [activeTab, setActiveTab] = useState("domains"); // default tab

  return (
    <div className="text-center px-4">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold mt-12 md:mt-20">
        What's first up for your business?
      </h1>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-6">
        {[
          { key: "domains", label: "Domains" },
          { key: "recommended", label: "Recommended" },
          { key: "wordpress", label: "WordPress and Security" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`border px-6 py-3 rounded-lg shadow-md font-medium transition-all duration-300 w-full md:w-auto
              ${
                activeTab === tab.key
                  ? "bg-black text-white border-black scale-105"
                  : "hover:border-black hover:border-2 hover:scale-105"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        {/* Domains */}
        {activeTab === "domains" && (
          <div className="w-auto md:w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First image spans 2 rows */}
              <div className="relative  rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md md:row-span-2  sm:h-80 md:h-full">
                <img
                  src={p1}
                  alt="Search Domains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-11/12 md:w-full text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg sm:opacity-100 opacity-0 md:text-2xl font-bold">Search Domains</h3>
                  <p className="text-sm sm:opacity-100 opacity-0 md:text-base mt-2">
                    Get started with the perfect domain, which comes with free domain
                    privacy protection forever.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-3 sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Search Domains
                  </button>
                </div>
              </div>

              {/* Second image */}
              <div className="relative w-full rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md h-64 sm:h-80 md:h-auto">
                <img
                  src={p2}
                  alt="Find your Domain"
                  className="w-full h-full object-covser object-right sm:object-cover"
                />
                <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11/12 sm:w-1/2 text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg sm:opacity-100 opacity-0 md:text-2xl font-bold">Find your Domain</h3>
                  <p className="text-sm sm:opacity-100 opacity-0 md:text-base mt-2">
                    Discover a domain that matches your idea and make your presence
                    known online instantly.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-24 sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Search Domains
                  </button>
                </div>
              </div>

              {/* Third image */}
              <div className="relative w-full rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md h-64 sm:h-80 md:h-auto">
                <img
                  src={p3}
                  alt="Start Saving"
                  className="w-full h-full object-cover object-right sm:object-cover"
                />
                <div className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 w-11/12 sm:w-1/2 text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg sm:opacity-100 opacity-0 md:text-2xl font-bold">Start Saving</h3>
                  <p className="text-sm sm:opacity-100 opacity-0 md:text-base mt-2">
                    Save more with exclusive domain deals and bundled offers built for
                    your business growth.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-24 sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Search Domains
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommended */}
        {activeTab === "recommended" && (
          <div className="w-full md:w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First image spans 2 rows */}
              <div className="relative w-full rounded-xl transition-shadow duration-300 hover:shadow-2xl overflow-hidden shadow-md md:row-span-2 h-64 sm:h-80 md:h-full">
                <img
                  src={d1}
                  alt="Recommended 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-11/12 md:w-full text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg sm:opacity-100 opacity-0 md:text-2xl font-bold">Recommended</h3>
                  <p className="text-sm md:text-base sm:opacity-100 opacity-0 mt-2">
                    Tools and services recommended to kickstart and grow your online business.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-3 sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Explore Recommended
                  </button>
                </div>
              </div>

              {/* Second image */}
              <div className="relative w-full rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md h-64 sm:h-80 md:h-auto">
                <img
                  src={d2}
                  alt="Recommended 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11/12 sm:w-1/2 text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg sm:opacity-100 opacity-0 md:text-2xl font-bold">Recommended</h3>
                  <p className="text-sm sm:opacity-100 opacity-0 md:text-base mt-2">
                    Boost productivity and simplify management with smart solutions.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-24  sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Explore Recommended
                  </button>
                </div>
              </div>

              {/* Third image */}
              <div className="relative w-full rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md h-64 sm:h-80 md:h-auto">
                <img
                  src={d3}
                  alt="Recommended 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 w-11/12 sm:w-1/2 text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg sm:opacity-100 opacity-0 md:text-2xl font-bold">Recommended</h3>
                  <p className="text-sm sm:opacity-100 opacity-0 md:text-base mt-2">
                    Unlock tools tailored to your growth and scale with confidence.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-24 sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Explore Recommended
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WordPress */}
        {activeTab === "wordpress" && (
          <div className="w-full md:w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First image spans 2 rows */}
              <div className="relative w-full rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md  h-64 sm:h-80 md:h-full">
                <img
                  src={q1}
                  alt="WordPress & Security 1"
                  className="w-full h-full object-cover transform transition duration-300"
                />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-11/12 md:w-auto text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg md:text-2xl font-bold sm:opacity-100 opacity-0">WordPress & Security</h3>
                  <p className="text-sm sm:opacity-100 opacity-0 md:text-base mt-2">
                    Secure hosting and powerful WordPress tools to build and protect your site.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-3 sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Explore WordPress
                  </button>
                </div>
              </div>

              {/* Second image */}
              <div className="relative w-full rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl shadow-md h-64 sm:h-80 md:h-full">
                <img
                  src={q2}
                  alt="WordPress & Security 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 w-11/12 sm:w-auto text-left text-black p-3 sm:p-4 rounded-lg">
                  <h3 className="text-lg md:text-2xl sm:opacity-100 opacity-0 font-bold">SSL Certificates ₹ 3,299.00/yr</h3>
                  <p className="text-sm md:text-base sm:opacity-100 opacity-0 mt-2">
                    Help keep sensitive data secure on your site and boost search ranking with an SSL Certificate.
                  </p>
                  <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg mt-3 sm:mt-4 hover:bg-neutral-800 transition text-base sm:text-lg font-medium">
                    Explore WordPress
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Priorties;
