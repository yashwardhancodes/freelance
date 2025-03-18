import React, { useState } from "react";
import latina from "../assets/latina.png";
import ChatInput2 from "../components/ChatInput2";
import Marquee from "../components/Marquee";

const Sell = () => {
  const [activeButton, setActiveButton] = useState("Featured");

  return (
    <>
      <Marquee />
      <div className="flex mx-8">
        {/* Left Section */}
        <div className="w-[45%] flex flex-col items-center py-16 justify-around h-[calc(100vh-7rem)]">
          <img src={latina} alt="Lina" className="size-72" />
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-white">Hey, I’m Lina</h1>
            <h3 className="text-3xl text-white">Your Personal AI Motor Agent</h3>
          </div>
          <ChatInput2 />
        </div>

        {/* Right Section */}
        <div className="w-[55%] my-4 rounded-lg relative">
          {/* Background with 10% opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

          {/* Content */}
          <div className="relative flex items-center justify-between p-4">
            <h1 className="text-white text-sm font-semibold">Cars for Sell 12424</h1>

            {/* Buttons with Active Gradient Border */}
            <div className="flex gradient-border items-center font-semibold space-x-5">
              {["Featured", "Company", "Listing"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setActiveButton(btn)}
                  className={`px-4 py-2   rounded-full text-white  transition-all duration-300 ${
                    activeButton === btn
                      ? "    bg-gradient-to-r from-[#7670FF] to-[#5B42FF] text-white"
                      : "hover:text-gray-200"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Sort & Filter Dropdown */}
            <div className="flex items-center space-x-3">
              <select className="px-3 py-1 text-white rounded-full border py-1 border-[#5B42FF] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] focus:outline-none focus:ring-2 focus:ring-[#7670FF]" 
              style={{ boxShadow: "0px 0px 8px 0px #4B4CFF" }}
>
                <option value="latest">Sort and Filter</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
