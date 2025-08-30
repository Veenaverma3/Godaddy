import React from "react";

const ContactChiclet = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[1998] transition-all duration-200">
      <button className="flex items-center bg-white border-4 border-cyan-600 shadow-lg rounded-full px-4 py-2 hover:bg-gray-100 transition">
        <div className="flex items-center space-x-2">
          <img
            src="https://img1.wsimg.com/dc-assets/live-engage/images/chat-baloon-dark.svg"
            alt="Contact Us"
            className="w-6 h-6"
          />
          <span className="text-gray-800 font-medium">Contact Us</span>
        </div>
      </button>
    </div>
  );
};

export default ContactChiclet;
