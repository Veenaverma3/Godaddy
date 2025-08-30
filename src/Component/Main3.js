 import React from "react";
import main1 from "../Component/Image/main3,1.webp"; // background image
import main2 from "../Component/Image/main3,2.webp"; // small image
import {
  Globe,
  ShoppingCart,
  Sparkles,
  Mail,
  MessageCircle,
  Palette,
} from "lucide-react";

const Main3 = () => {
  return (
    <div className="w-full px-4 md:px-16 my-12">
      {/* Heading */}
      <h1 className="text-2xl md:text-5xl font-semibold  font-serif text-left mb-6">
        Find inspiration with Airo
      </h1>

      {/* Background + Content */}
      <div className="relative">
        {/* Background */}
        <img src={main1} alt="main1" className="w-full rounded-lg" />

        {/* Name & Role on background bottom-left */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
          <p className="text-sm md:text-base">
            <span className="font-semibold">Walton Goggins</span> <br />
            Actor / Business Owner
          </p>
        </div>

        {/* Overlay Box */}
        <div
          className="
            bg-white w-full md:w-1/2 p-6 md:p-14 rounded-xl shadow-xl mt-6
            md:absolute md:top-1/2 md:right-10 md:transform md:-translate-y-1/2
          "
        >
          {/* Testimonial */}
          <h3 className="font-medium text-base md:text-xl mb-4 leading-relaxed">
            “It's my job to make you believe I can do anything. But when it came
            to building my website, GoDaddy Airo™ stepped in and turned my
            vision into reality.”
          </h3>

          {/* Products used */}
          <p className="text-sm md:text-base">Products used by</p>
          <p className="font-semibold text-lg md:text-xl mb-4">
            Walton Goggins Goggles:
          </p>

          {/* Content Flex */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Left - Products List */}
            <ul className="space-y-4 text-sm md:text-base flex-1">
              <li className="flex items-center gap-2">
                <Globe size={26} className="text-gray-700 bg-sky-200 p-1 rounded-md" />
                Domain Name
              </li>
              <li className="flex items-center gap-2">
                <ShoppingCart size={26} className="text-gray-700 bg-sky-200 p-1 rounded-md" />
                Online Store
              </li>
              <li className="flex items-center gap-2">
                <Sparkles size={26} className="text-gray-700 bg-sky-200 p-1 rounded-md" />
                Airo™ Plus Logo
              </li>
              <li className="flex items-center gap-2">
                <Mail size={26} className="text-gray-700 bg-sky-200 p-1 rounded-md" />
                Business Email
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={26} className="text-gray-700 bg-sky-200 p-1 rounded-md" />
                Conversations
              </li>
              <li className="flex items-center gap-2">
                <Palette size={26} className="text-gray-700 bg-sky-200 p-1 rounded-md" />
                GoDaddy Studio
              </li>
            </ul>

            {/* Right - Image */}
            <div className="text-center md:text-right flex-shrink-0">
              <img
                src={main2}
                alt="main2"
                className="w-40 md:w-auto h-40 md:h-64 object-cover rounded-lg shadow-md mb-2 mx-auto md:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
