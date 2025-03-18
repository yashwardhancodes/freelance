import React, { useState } from "react";
import latina from "../assets/latina.png";
import ChatInput2 from "../components/ChatInput2";
import Marquee from "../components/Marquee";
import { Heart, MessageCircle } from "lucide-react";

const carList = [
  {
    name: "BMW M3 Competition",
    edition: "Premium Sport Edition",
    price: "AED 345,000",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800",
    year: 2021,
    mileage: "10,721 km",
    drive: "Left Hand",
  },
  {
    name: "Mercedes AMG GT",
    edition: "Sport Coupe Edition",
    price: "AED 490,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AxAXRV0hWJKpqlR3EGzn7Vhs6lUy9XFmUw&s",
    year: 2022,
    mileage: "5,000 km",
    drive: "Left Hand",
  },
  {
    name: "Porsche 911 Turbo",
    edition: "High Performance",
    price: "AED 650,000",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg",
    year: 2023,
    mileage: "2,500 km",
    drive: "Left Hand",
  },
  {
    name: "Audi R8 V10",
    edition: "Performance Edition",
    price: "AED 580,000",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A5/11864/1721137944455/front-left-side-47.jpg",
    year: 2021,
    mileage: "15,000 km",
    drive: "Left Hand",
  },
];

const CarCard = ({ car }) => (
  <div className="bg-[#010122] rounded-xl overflow-hidden shadow-lg text-white">
    {/* Car Image */}
    <div className="relative">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <button className="absolute top-4 right-4 p-1.5 bg-white/80 backdrop-blur-sm rounded-full">
        <Heart className="w-5 h-5 text-gray-700" />
      </button>
    </div>

    {/* Card Content */}
    <div className="p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold">{car.name}</h3>
          <p className="text-sm">{car.edition}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">{car.price}</p>
          <p className="text-sm text-gray-400">Sell</p>
        </div>
      </div>

      {/* Car Details */}
      <div className="flex gap-4 text-sm text-gray-300 mb-4">
        <span>{car.year}</span>
        <span>•</span>
        <span>{car.mileage}</span>
        <span>•</span>
        <span>{car.drive}</span>
      </div>


      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
        <MessageCircle className="w-5 h-5" />
        Chat with Us
      </button>
    </div>
  </div>
);

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
            <h1 className="text-white text-sm font-semibold">Cars for Sale (12424)</h1>

            {/* Buttons with Active Gradient Border */}
            <div className="flex gradient-border items-center font-semibold space-x-5">
              {["Featured", "Company", "Listing"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setActiveButton(btn)}
                  className={`px-4 py-2 rounded-full text-white transition-all duration-300 ${
                    activeButton === btn
                      ? "bg-gradient-to-r from-[#7670FF] to-[#5B42FF] text-white"
                      : "hover:text-gray-200"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Sort & Filter Dropdown */}
            <div className="flex items-center space-x-3">
              <select
                className="px-3 py-1 text-white rounded-full border border-[#5B42FF] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] focus:outline-none focus:ring-2 focus:ring-[#7670FF]"
                style={{ boxShadow: "0px 0px 8px 0px #4B4CFF" }}
              >
                <option value="latest">Sort and Filter</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Car Listings - 4 cards per row on large screens, 2 per row on medium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
            {carList.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>

          <div className="flex justify-center mt-8 mb-6">
  <button className="bg-[#7670FF] text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-[#5B42FF] transition duration-300" style={{ fontFamily: "Gotham Rounded, sans-serif" }}>
    Load More
  </button>
</div>

        </div>
      </div>
    </>
  );
};

export default Sell;