 "use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full" ref={dropdownRef}>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between w-full h-16 bg-[#111111] px-4">
        {/* Mobile Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="w-8 h-8 invert"
            src="https://img6.wsimg.com/ux-assets/favicon/safari-pinned-tab.svg"
            alt="logo"
          />
          <div className="flex flex-col">
            <span className="text-white text-lg font-bold">GoDaddy</span>
            <span className="text-[8px] text-gray-300">India</span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2 hover:bg-gray-700 rounded-md"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navbar - Original Design */}
      <div className="hidden md:flex items-center justify-center w-full h-16 bg-[#111111]">
        <div className="w-[90%] flex items-center justify-between text-white h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex space-x-1">
              <img
                className="w-9 h-9 invert"
                src="https://img6.wsimg.com/ux-assets/favicon/safari-pinned-tab.svg"
                alt="logo"
              />
              <div className="flex flex-col items-end">
                <span className="text-white text-2xl font-bold">GoDaddy</span>
                <span className="text-[10px] text-gray-300 mr-1">India</span>
              </div>
            </Link>

            {/* Left Nav Links */}
            <div className="flex ml-1.5 gap-3">
              <button
                onClick={() => toggleDropdown("domains")}
                className={`flex font-bold items-center gap-1 px-3 py-2 cursor-pointer rounded-md 
                          ${
                            openDropdown === "domains"
                              ? "bg-white text-black"
                              : "hover:bg-gray-600"
                          }`}
              >
                Domain{" "}
                {openDropdown === "domains" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <button
                onClick={() => toggleDropdown("websites")}
                className={`flex font-bold items-center gap-1 px-3 py-2 cursor-pointer rounded-md 
                             ${
                               openDropdown === "websites"
                                 ? "bg-white text-black"
                                 : "hover:bg-gray-600"
                             }`}
              >
                Websites & Hosting{" "}
                {openDropdown === "websites" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <button className="cursor-pointer font-bold">Email</button>

              <button
                onClick={() => toggleDropdown("security")}
                className={`flex font-bold items-center gap-1 px-3 py-2 cursor-pointer rounded-md 
                             ${
                               openDropdown === "security"
                                 ? "bg-white text-black"
                                 : "hover:bg-gray-600"
                             }`}
              >
                Security{" "}
                {openDropdown === "security" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <button
                onClick={() => toggleDropdown("marketing")}
                className={`flex font-bold items-center gap-1 px-3 py-2 cursor-pointer rounded-md 
                             ${
                               openDropdown === "marketing"
                                 ? "bg-white text-black"
                                 : "hover:bg-gray-600"
                             }`}
              >
                Marketing{" "}
                {openDropdown === "marketing" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <button className="cursor-pointer font-bold">
                GoDaddy Airo ®
              </button>
              <button className="cursor-pointer font-bold">Pricing</button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex gap-6">
            <div className="flex font-bold items-center gap-1 px-3 py-2 cursor-pointer">
              Contact Us
            </div>
            <div className="flex font-bold items-center gap-1 px-3 py-2 cursor-pointer">
              Help
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("signin")}
                className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-md 
                          ${
                            openDropdown === "signin"
                              ? "bg-white text-black"
                              : "hover:bg-gray-600"
                          }`}
              >
                Sign in{" "}
                {openDropdown === "signin" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {/* cart  */}
            <div className="flex items-center gap-1 px-3 py-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3 size-6"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111111] text-white border-t border-gray-700"
          >
            <div className="px-4 py-2 space-y-1">
              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown("domains")}
                  className={`w-full flex items-center justify-between p-3 rounded-md font-medium ${
                    openDropdown === "domains" ? "bg-gray-700" : "hover:bg-gray-800"
                  }`}
                >
                  <span>Domains</span>
                  {openDropdown === "domains" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Mobile Domains Dropdown */}
                <AnimatePresence>
                  {openDropdown === "domains" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-800 rounded-md p-3 space-y-3"
                    >
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Find Domain</h3>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                          </div>
                          <span className="text-sm">Find a Domain</span>
                        </Link>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                          </div>
                          <span className="text-sm">Transfer Domain Names</span>
                        </Link>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                          </div>
                          <span className="text-sm">gTLD Domain Extensions</span>
                        </Link>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Domain Investing</h3>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                          </div>
                          <span className="text-sm">Domain Auctions</span>
                        </Link>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            </svg>
                          </div>
                          <span className="text-sm">Discount Domain Club</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggleDropdown("websites")}
                  className={`w-full flex items-center justify-between p-3 rounded-md font-medium ${
                    openDropdown === "websites" ? "bg-gray-700" : "hover:bg-gray-800"
                  }`}
                >
                  <span>Websites & Hosting</span>
                  {openDropdown === "websites" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Mobile Websites Dropdown */}
                <AnimatePresence>
                  {openDropdown === "websites" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-800 rounded-md p-3 space-y-3"
                    >
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Websites</h3>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium">Website Builder</span>
                            <span className="bg-blue-600 text-white text-xs px-1 py-0.5 rounded ml-2">FREE TRIAL</span>
                          </div>
                        </Link>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                            </svg>
                          </div>
                          <span className="text-sm">Online Store</span>
                        </Link>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Hosting</h3>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
                            </svg>
                          </div>
                          <span className="text-sm">Web Hosting</span>
                        </Link>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                          </div>
                          <span className="text-sm">VPS Hosting</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="#" className="block w-full p-3 rounded-md font-medium hover:bg-gray-800">
                  Email
                </Link>

                <button
                  onClick={() => toggleDropdown("security")}
                  className={`w-full flex items-center justify-between p-3 rounded-md font-medium ${
                    openDropdown === "security" ? "bg-gray-700" : "hover:bg-gray-800"
                  }`}
                >
                  <span>Security</span>
                  {openDropdown === "security" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Mobile Security Dropdown */}
                <AnimatePresence>
                  {openDropdown === "security" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-800 rounded-md p-3 space-y-3"
                    >
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">SSL Certificates</h3>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                          </div>
                          <span className="text-sm">SSL Certificates</span>
                        </Link>
                        <Link to="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                          <div className="bg-[#d8efef] rounded p-1">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                          </div>
                          <span className="text-sm">Website Security</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggleDropdown("marketing")}
                  className={`w-full flex items-center justify-between p-3 rounded-md font-medium ${
                    openDropdown === "marketing" ? "bg-gray-700" : "hover:bg-gray-800"
                  }`}
                >
                  <span>Marketing</span>
                  {openDropdown === "marketing" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Mobile Marketing Dropdown */}
                <AnimatePresence>
                  {openDropdown === "marketing" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-800 rounded-md p-3 space-y-3"
                    >
                      <Link to="#" className="flex items-start space-x-3 p-2 rounded hover:bg-gray-700">
                        <div className="bg-[#d8efef] rounded p-1 mt-1">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">Digital Marketing</h4>
                          <p className="text-xs text-gray-400 mt-1">Build your presence and reach customers</p>
                        </div>
                      </Link>
                      <Link to="#" className="flex items-start space-x-3 p-2 rounded hover:bg-gray-700">
                        <div className="bg-[#d8efef] rounded p-1 mt-1">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">Logo Maker</h4>
                          <span className="bg-purple-200 text-purple-800 text-xs px-1 py-0.5 rounded">AI-POWERED</span>
                          <p className="text-xs text-gray-400 mt-1">Create custom logos and designs</p>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="#" className="block w-full p-3 rounded-md font-medium hover:bg-gray-800">
                  GoDaddy Airo ®
                </Link>
                <Link to="#" className="block w-full p-3 rounded-md font-medium hover:bg-gray-800">
                  Pricing
                </Link>
              </div>

              {/* Mobile Right Side Links */}
              <div className="border-t border-gray-700 pt-4 mt-4 space-y-2">
                <Link to="#" className="block w-full p-3 rounded-md hover:bg-gray-800">
                  Contact Us
                </Link>
                <Link to="#" className="block w-full p-3 rounded-md hover:bg-gray-800">
                  Help
                </Link>
                <button
                  onClick={() => toggleDropdown("signin")}
                  className={`w-full flex items-center justify-between p-3 rounded-md font-medium ${
                    openDropdown === "signin" ? "bg-gray-700" : "hover:bg-gray-800"
                  }`}
                >
                  <span>Sign In</span>
                  {openDropdown === "signin" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Mobile Sign In Dropdown */}
                <AnimatePresence>
                  {openDropdown === "signin" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-800 rounded-md p-4 space-y-4"
                    >
                      <div>
                        <h3 className="font-semibold text-sm mb-2">Registered Users</h3>
                        <p className="text-xs text-gray-400 mb-3">Have an account? Sign in now.</p>
                        <Link to="#" className="text-[#09757A] underline text-sm">Sign in</Link>
                      </div>
                      
                      <hr className="border-gray-600" />
                      
                      <div>
                        <h3 className="font-semibold text-sm mb-2">New Customer</h3>
                        <p className="text-xs text-gray-400 mb-3">New to GoDaddy? Create an account to get started today.</p>
                        <Link to="#" className="text-[#09757A] underline text-sm">Create an Account</Link>
                      </div>
                      
                      <hr className="border-gray-600" />
                      
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Inbox Links</h3>
                        <div className="space-y-2">
                          <Link to="#" className="block text-[#09757A] hover:underline text-sm">
                            Sign in to Office 365 Email
                          </Link>
                          <Link to="#" className="block text-[#09757A] hover:underline text-sm">
                            Sign in to GoDaddy Webmail
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="#" className="flex items-center justify-center w-full p-3 rounded-md hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart3 size-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Dropdown Panel (Full Width) - Unchanged for md+ */}
      <AnimatePresence>
        {openDropdown && openDropdown !== "signin" && (
          <motion.div
            key="main-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block w-full mt-2.5 shadow-md overflow-hidden"
          >
            <div
              className={`w-full transform transition-all duration-300 origin-top overflow-hidden 
                                      ${
                                        openDropdown === "domains"
                                          ? "bg-white text-black"
                                          : ""
                                      }
                                     ${
                                       openDropdown === "websites"
                                         ? "bg-white text-black"
                                         : ""
                                     }
                                     ${
                                       openDropdown === "security"
                                         ? "bg-white text-black"
                                         : ""
                                     }
                                     ${
                                       openDropdown === "marketing"
                                         ? "bg-white text-black"
                                         : ""
                                     }
                                     ${
                                       openDropdown
                                         ? "max-h-[600px] opacity-100 scale-y-100"
                                         : "max-h-0 opacity-0 scale-y-0"
                                     }`}
            >
              <div className="w-[90%] py-6 gap-6">
                {openDropdown === "domains" && (
                  <>
                    <motion.div
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="flex w-full ml-20 space-y-4 p-2 bg-white rounded">
                        {/* Group 1: Find Domain */}
                        <div className="flex-1 w-full flex-col space-y-3">
                          <span className="text-gray-700 text-sm">
                            Find Domain
                          </span>
                          <Link 
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                              </svg>
                            </div>
                            <span>Find a Domain</span>
                          </Link>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                />
                              </svg>
                            </div>
                            <span>Transfer Domain Names</span>
                          </Link>

                          <Link
                             to="#"
                             className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                              </svg>
                            </div>
                            <span>gTLD Domain Extensions</span>
                          </Link>
                        </div>

                        {/* Group 2: Domain */}
                        <div className="flex-1 w-full flex-col space-y-3">
                          <span className="text-gray-700 text-sm">
                            Domain Investing
                          </span>
                          <Link
                              to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </div>
                            <span>Auctions for Domain Names</span>
                          </Link>
                          <Link 
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                />
                              </svg>
                            </div>
                            <span>Appraise Domain Name Value</span>
                          </Link>
                          <Link
                              to="#"
                             className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 6h.008v.008H6V6Z"
                                />
                              </svg>
                            </div>
                            <span>Discount Domain Club</span>
                          </Link>
                        </div>

                        {/* Group 3: Investing */}
                        <div className="flex-1 flex-col space-y-1">
                          <span className="text-gray-700 font-semibold">
                            Investing
                          </span>
                          <Link
                             to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                />
                              </svg>
                            </div>
                            <span>
                              Generate Domain Names
                              <sup className="ml-1 bg-[#d3c1f7]">
                                AI-powered
                              </sup>
                            </span>
                          </Link>
                          <Link
                            to="#"
                             className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                />
                              </svg>
                            </div>
                            <span>Find a Domain Owner (WHOIS)</span>
                          </Link>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </div>
                            <span>Domain Broker Service</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {openDropdown === "websites" && (
                  <>
                    <motion.div
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="flex w-full ml-20 space-y-4 p-2 bg-white rounded">
                        {/* Group 1: Find Domain */}
                        <div className="flex-1 w-full flex-col space-y-3">
                          <span className="text-gray-700 text-sm">
                            WEBSITES
                          </span>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                                />
                              </svg>
                            </div>
                            <span>
                              Website Builder
                              <sup className="bg-blue-800 text-white ml-0.5 p-0.5">
                                FREE TRIAL
                              </sup>
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                                />
                              </svg>
                            </div>
                            <span>Online Store</span>
                          </Link>

                          <Link
                            to="#"
                            className="group flex items-center space-x-2 rounded p-2 w-80 hover:bg-gray-100"
                          >
                            <div className="bg-gray-200 rounded-md p-1 m-1 group-hover:bg-white transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-700"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                            <span>All Website Options</span>
                          </Link>
                        </div>

                        {/* Group 2: Domain */}
                        <div className="flex-1 w-full flex-col space-y-3">
                          <span className="text-gray-700 text-sm">HOSTING</span>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
                                />
                              </svg>
                            </div>
                            <span>Auctions for Domain Names</span>
                          </Link>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
                                />
                              </svg>
                            </div>
                            <span>Hosting for WordPress</span>
                          </Link>
                          <Link
                            to="#"
                             className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                />
                              </svg>
                            </div>
                            <span>VPS Hosting</span>
                          </Link>

                          <Link
                             to="#"
                             className="group flex items-center space-x-2 rounded p-2 w-80 hover:bg-gray-100"
                          >
                            <div className="bg-gray-200 rounded-md p-1 m-1 group-hover:bg-white transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-700"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                            <span>All Hosting Options</span>
                          </Link>
                        </div>

                        {/* Group 3: Investing */}
                        <div className="flex-1 flex-col space-y-1">
                          <span className="text-gray-700 font-semibold">
                            TOOLS FOR FREELANCERS
                          </span>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <img
                                className="w-6 h-6"
                                src="https://img6.wsimg.com/ux-assets/favicon/safari-pinned-tab.svg"
                                alt="logo"
                              />
                            </div>
                            <span>GODaddy Hub Client Dashboard</span>
                          </Link>
                        </div>
                        <Link to="#" className="group flex-1 flex-col space-y-1">
                          <div className="overflow-hidden">
                            <img
                              src="https://img1.wsimg.com/cdnassets/transform/d7ac1d77-a2ac-48eb-9bb6-b526eb64791c/img-meganav-show-in-bio"
                              className="transition-transform duration-300 transform group-hover:scale-110 rounded"
                            />
                          </div>
                          <span className="group-hover:underline">
                            Link in Bio for Social Media
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  </>
                )}

                {openDropdown === "security" && (
                  <>
                    <motion.div
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="flex w-full ml-20 space-y-4 p-2 bg-white rounded">
                        {/* Group 1: Find Domain */}
                        <div className="flex-1 w-full flex-col space-y-3">
                          <span className="text-gray-700 text-sm">
                            SSL Certificates
                          </span>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-50 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                />
                              </svg>
                            </div>
                            <span>SSL Certificates</span>
                          </Link>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                />
                              </svg>
                            </div>
                            <span>Managed SSL Certificates</span>
                          </Link>
                        </div>

                        {/* Group 2: Domain */}
                        <div className="flex-1 w-full flex-col space-y-3">
                          <span className="text-gray-700 text-sm">
                            WEBSITE SECURITY
                          </span>
                          <Link
                            to="#"
                            className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 w-80"
                          >
                            <div className="bg-[#d8efef] rounded-md p-1 m-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                                />
                              </svg>
                            </div>
                            <span>Website Security</span>
                          </Link>

                          <Link
                              to="#"
                            className="group flex items-center space-x-2 rounded p-2 w-80 hover:bg-gray-100"
                          >
                            <div className="bg-gray-200 rounded-md p-1 m-1 group-hover:bg-white transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-700"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                            <span>All Web Security Options</span>
                          </Link>
                        </div>

                        {/* Group 3: Investing */}
                        <div className="flex-1 flex-col space-y-1"></div>
                        <Link to="#" className="group flex-1 flex-col space-y-5">
                          <div className="overflow-hidden">
                            <img
                              src="https://img1.wsimg.com/cdnassets/transform/a00296a4-9b10-470e-9845-1124f28b7d51/img-meganav-website-backup"
                              className="transition-transform duration-300 transform group-hover:scale-110 rounded"
                            />
                          </div>
                          <span className="group-hover:underline">
                            Back Up Your Website for Peace of Mind
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  </>
                )}

                {openDropdown === "marketing" && (
                  <>
                    <motion.div
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="flex w-full ml-20 space-y-4 p-2 bg-white rounded">
                        {/* Group 1: Find Domain */}
                        <div className="flex-1 w-full flex-col space-y-3">
                          <span className="text-gray-700 text-sm">
                            MARKETING TOOLS
                          </span>
                          <Link
                            to="#"
                            className="flex flex-col items-start hover:bg-gray-50 rounded p-4 w-80 space-y-2"
                          >
                            {/* Icon and Title on the same line */}
                            <div className="flex items-center space-x-2">
                              <div className="bg-[#d8efef] rounded-md p-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                                  />
                                </svg>
                              </div>
                              <h2 className="text-lg font-semibold">
                                Digital Marketing
                              </h2>
                            </div>

                            {/* Description under the title */}
                            <span className="text-gray-600 text-sm">
                              Build your presence, reach more customers, and
                              accelerate your growth.
                            </span>
                          </Link>

                          <Link
                            to="#"
                            className="flex flex-col items-start hover:bg-gray-50 rounded p-4 w-80 space-y-2"
                          >
                            {/* Icon and Title on the same line */}
                            <div className="flex items-center space-x-2">
                              <div className="bg-[#d8efef] rounded-md p-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                                  />
                                </svg>
                              </div>
                              <h2 className="text-lg font-semibold">
                                Logo Maker{" "}
                                <sup className="bg-[#d3c1f7] p-1">
                                  AI-POWERED
                                </sup>
                              </h2>
                            </div>

                            {/* Description under the title */}
                            <span className="text-gray-600 text-sm">
                              Stand out with a custom logo, 3D designs, and
                              compelling images.{" "}
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="flex flex-col items-start hover:bg-gray-50 rounded p-4 w-80 space-y-2"
                          >
                            {/* Icon and Title on the same line */}
                            <div className="flex items-center space-x-2">
                              <div className="bg-[#d8efef] rounded-md p-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                  />
                                </svg>
                              </div>
                              <h2 className="text-lg font-semibold">
                                Unified Inbox
                              </h2>
                            </div>

                            {/* Description under the title */}
                            <span className="text-gray-600 text-sm">
                              Simplify and organize communication with your
                              customers, right on your phone.
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="flex flex-col items-start hover:bg-gray-50 rounded p-4 w-80 space-y-2"
                          >
                            {/* Icon and Title on the same line */}
                            <div className="flex items-center space-x-2">
                              <div className="bg-[#d8efef] rounded-md p-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                  />
                                </svg>
                              </div>
                              <h2 className="text-lg font-semibold">
                                Content & Photo Creator
                              </h2>
                            </div>

                            {/* Description under the title */}
                            <span className="text-gray-600 text-sm">
                              Create content that can boost your brand online.
                              No design skills needed.
                            </span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sign-in dropdown - Unchanged */}
      {openDropdown === "signin" && (
        <div className="hidden md:block absolute right-3 mt-2 w-90 z-30 bg-white lg:mr-34 lg:mt-[-5px] text-black shadow-lg rounded-lg p-4 transform transition-all duration-300 origin-top border border-gray-300">
          {/* Outer arrow (border color) */}
          <div
            className="absolute -top-2 right-6 
                w-0 h-1 border-l-8 border-r-8 border-b-8 border-transparent 
                border-b-gray-300"
          ></div>

          {/* Inner arrow (background color) */}
          <div
            className="absolute -top-1.5 right-6 
                w-0 h-1 border-l-7 border-r-7 border-b-7 border-transparent 
                border-b-white"
          ></div>
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center justify-between">
              <h1 className="font-bold m-2 text-sm">Registered Users</h1>
              <button
                className="cursor-pointer text-2xl mt-[-16px] p-2 rounded-2xl"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <X size={24} />
              </button>
            </div>
            <span className="text-sm ml-2">Have an account? Sign in now.</span>
            <Link to="#" className="block m-2 py-2 text-[#09757A] underline">
              Sign in
            </Link>
            <hr className="m-2" />
            <h1 className="font-bold m-2 text-sm">New Customer</h1>
            <span className="text-sm ml-2">
              New to GoDaddy? Create an account to get started today.
            </span>

            <Link to="#" className="m-2 block py-2 text-[#09757A] underline">
              Create an Account
            </Link>
            <hr className="mt-2" />
            <h1 className="tracking-wider text-gray-400 m-2 text-xs">
              INBOX LINKS
            </h1>
            <span className="text-sm ml-2">
              New to GoDaddy? Create an account to get started today.
            </span>

            <Link
              to="#"
              className="ml-2 block py-2 text-[#09757A] hover:underline"
            >
              Sign in to Office 365 Email
            </Link>
            <Link
              to="#"
              className="ml-2 block py-2 text-[#09757A] hover:underline"
            >
              Sign in to GoDaddy Webmail
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;