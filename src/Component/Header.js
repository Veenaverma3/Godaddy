 import React from "react";
import { Search } from "lucide-react"; // search icon

const Header = () => {
  return (
    <div className="w-11/12 mt-8 rounded-xl  m-auto bg-gray-100 py-2 px-1">
      {/* Main container */}
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT: Input + Button */}
        <div className="flex w-full md:w-4/5">
          {/* Input with Icon */}
          <div className="flex items-center w-full border border-gray-300 rounded-l-lg shadow-md shadow-gray-300 bg-white ">
            <Search className="ml-6 text-gray-500" size={20} /> {/* icon */}
            <input
              type="text"
              placeholder="Type the domain you want"
              className="w-full h-12 md:h-16 px-2 text-lg md:text-xl focus:outline-none"
            />

   <div className=" rounded-md p-2 overflow-hidden">
            <button className="bg-teal-700 text-white h-12 md:h-16 rounded-md px-4 hover:bg-teal-800 transition">
              Search Domain
            </button>
          </div>
          </div>
         </div>

         <div className="flex flex-col text-center md:text-right mr-6">
          <div className="text-sm md:text-lg font-semibold">
            <span className="text-green-600">.club</span>{" "}
            <span className="text-gray-800">₹429.00*</span>{" "}
            <span className="text-xs md:text-sm text-gray-500">/ 1st yr.</span>
          </div>
          <div className="text-xs md:text-sm text-gray-600">
            Bring people together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
