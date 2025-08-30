 import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  ChevronUp,
} from "lucide-react";
import { SiTiktok } from "react-icons/si"; // TikTok icon
import logo from "../Component/Image/godady.jpeg"; // ✅ Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      {/* Top: 6 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        {/* About GoDaddy */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About GoDaddy</h3>
          <ul className="space-y-4">
            <li>About Us</li>
            <li>Annual Return</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>GoDaddy Blog</li>
            <li>Investor Relations</li>
            <li>Legal</li>
            <li>Newsroom</li>
            <li>Trust Center</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-4">
            <li>Product Support</li>
            <li>Report Abuse</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-4">
            <li>Webmail</li>
            <li>WHOIS</li>
            <li>ICANN Confirmation</li>
            <li>Designers & Developers</li>
            <li>Redeem Code</li>
            <li>Customer Testimonials</li>
            <li>Product Catalog</li>
            <li>Business Name Generator</li>
          </ul>
        </div>

        {/* Partner Programs */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Partner Programs</h3>
          <ul className="space-y-4">
            <li>Affiliates</li>
            <li>Reseller Programs</li>
            <li>GoDaddy Pro</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Account</h3>
          <ul className="space-y-4">
            <li>Login to GoDaddy</li>
            <li>Renewals & Billing</li>
            <li>Create Account</li>
          </ul>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Shopping</h3>
          <ul className="space-y-4">
            <li>Buy a Domain</li>
            <li>Websites</li>
            <li>Business Email</li>
            <li>WordPress</li>
            <li>Hosting</li>
            <li>Web Security</li>
            <li>Logo Generator</li>
            <li>Phone Numbers</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <img
            src={logo}
            alt="GoDaddy Logo"
            className="w-20 md:w-32 object-contain bg-black invert"
          />

          <div className="flex items-center gap-2 cursor-pointer">
            <Globe size={18} />
            <span>India - English</span>
            <ChevronUp size={16} />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <span>INR ₹</span>
            <ChevronUp size={16} />
          </div>
        </div>

        {/* Right Side: Socials */}
        <div className="flex items-center gap-6">
          <Facebook className="hover:text-blue-500 cursor-pointer w-8 h-8 md:w-10 md:h-10" />
          <Instagram className="hover:text-pink-500 cursor-pointer w-8 h-8 md:w-10 md:h-10" />
          <SiTiktok className="hover:text-gray-400 cursor-pointer w-9 h-9 md:w-10 md:h-10" />
          <Twitter className="hover:text-sky-400 cursor-pointer w-8 h-8 md:w-10 md:h-10" />
          <Youtube className="hover:text-red-500 cursor-pointer w-8 h-8 md:w-10 md:h-12" />
        </div>
      </div>

      {/* ✅ Divider moved here */}
      <hr className="border-gray-700 my-8" />

      {/* Copyright & Links */}
      <div className="flex flex-col md:flex-row justify-between gap-6 text-xs text-gray-400">
        {/* Left Side */}
        <div className="space-y-5 max-w-5xl">
          <p>
            Copyright © 1999 - 2025 GoDaddy Operating Company, LLC. All Rights
            Reserved. The GoDaddy word mark is a registered trademark of GoDaddy
            Operating Company, LLC in the US and other countries. The “GO” logo
            is a registered trademark of GoDaddy.com, LLC in the US.
          </p>
          <p>
            Use of this Site is subject to express terms of use. By using this
            site, you signify that you agree to be bound by these Universal
            Terms of Service.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex flex-wrap gap-4">
            <span className="hover:text-white cursor-pointer">Legal</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
          <span className="hover:text-white cursor-pointer mt-4 md:mt-8">
            Do Not Sell My Personal Information
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
