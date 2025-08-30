 import React from "react";

const Footer1 = () => {
  return (
    <div className="bg-cyan-200 text-black overflow-hidden h-28 text-2xl flex items-center mt-16">
      <ul className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {/* First set */}
        <li className="mx-10 font-mono list-disc">Grow your business</li>
        <li className="mx-10 text-3xl font-bold list-disc">Social made simple</li>
        <li className="mx-10 font-thin list-disc">Trusted worldwide</li>
        <li className="mx-10 font-thin list-disc">Social made simple</li>
        <li className="mx-10 text-3xl font-bold list-disc">
          GoDaddy is a great business partner
        </li>
        <li className="mx-10 font-thin list-disc">Websites that write themselves</li>
        <li className="mx-10 font-thin list-disc">Grow your own business</li>

        {/* Duplicate set for seamless loop */}
        <li className="mx-10 font-mono list-disc">Grow your business</li>
        <li className="mx-10 text-3xl font-bold list-disc">Social made simple</li>
        <li className="mx-10 font-thin list-disc">Trusted worldwide</li>
        <li className="mx-10 font-thin list-disc">Social made simple</li>
        <li className="mx-10 text-3xl font-bold list-disc">
          GoDaddy is a great business partner
        </li>
        <li className="mx-10 font-thin list-disc">Websites that write themselves</li>
        <li className="mx-10 font-thin list-disc">Grow your own business</li>
      </ul>
    </div>
  );
};

export default Footer1;
