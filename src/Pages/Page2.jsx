import React from 'react';
import {  MapPin, Share2 } from 'lucide-react';
import { Heart, MessageCircle } from 'lucide-react';
import enquire from "../assets/enquire.png"

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
  } 
];


const CarCard = ({ car }) => (
  <div className="bg-[#010122] rounded-xl overflow-hidden shadow-lg text-white">
    <div className="relative">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <button className="absolute top-4 right-4 p-1.5 bg-white/80 backdrop-blur-sm rounded-full">
        <Heart className="w-5 h-5 text-gray-700" />
      </button>
    </div>
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
      <div className="flex gap-4 text-sm text-gray-300 mb-4">
        <span>{car.year}</span>
        <span>•</span>
        <span>{car.mileage}</span>
        <span>•</span>
        <span>{car.drive}</span>
      </div>

      {/* Chat Button */}
      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
        <MessageCircle className="w-5 h-5" />
        Chat with Us
      </button>
    </div>
  </div>
);

const Page2 = () => {
  return (<>
    <div className="my-6 mx-8 flex space-x-4">
      {/* Left Section */}
      <div className="w-[50%] relative rounded-lg">
        {/* Background Overlay with Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r   from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

        {/* Content (No Opacity) */}
        <div className="relative min-h-screen   flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl max-w-3xl w-full overflow-hidden">
            {/* Top Icons */}
            <div className="absolute top-6 left-6 right-6 flex-col justify-between z-10">
              

              <div className=" flex flex-col gap-2">
              <button className=" w-fit p-3 rounded-full hover:bg-white transition-colors">
                <Heart className="w-6 h-6 text-gray-700" />
              </button>
                <button className="  w-fit p-3 rounded-full hover:bg-white transition-colors">
                  <MapPin className="w-6 h-6 text-gray-700" />
                </button>
                <button className="  w-fit p-3 rounded-full hover:bg-white transition-colors">
                  <Share2 className="w-6 h-6  text-gray-700" />
                </button>
              </div>
            </div>

            {/* Car Image */}
            <div className="aspect-[16/9] absolute top-0 m-2 rounded-full ">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Car"
                className="w-full h-full rounded-md   object-cover"
              />
            </div>

             

            {/* Logo */}
            <div className="absolute top-6 right-6">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                <div className="text-xs font-semibold text-center">
                  YOUR
                  <br />
                  LOGO
                </div>
              </div>
            </div>


            <div className='flex  absolute items-center space-x-30 font-semibold justify-between'> 
            <div className='text-[#F800C0] text-sm'>Daily <span className='text-white textx-xl'>/ AED 2500</span></div>
            <div className='text-[#F800C0] text-sm'>Monthly <span className='text-white textx-xl'>/ AED 2500</span></div>
            <div className='text-[#F800C0] text-sm'>Weekly <span className='text-white textx-xl'>/ AED 2500</span></div>

        </div>
        <div className='my-12 border py-4  absolute border-y-[#F800C0]'>
            <h1 className='text-[#F800C0] text-xl'>Description</h1>
            <p className='font-thin text-white'>Rent and Drive this Cadillac Escalade Platinum Sport 2023-model in Dubai, UAE  for AED 950/day & AED 22000/month. Rental cost includes basic comprehensive insurance and standard mileage limit of 250 km/day (AED 3 per additional km applicable). Security deposit of AED 2000 is required. Contact Speedy Machine Car Rental directly for bookings and inquiries...</p>
        </div>

        <div className="absolute  mt-64 text-white">
  <div className="font-thin">
    <div className="flex items-center">
      <h1 className="font-thin text-[#F800C0]">Body Type:</h1>
      <span className="ml-2">SUV</span>
    </div>

    <div className="flex items-center">
      <h1 className="font-thin text-[#F800C0]">Salik:</h1>
      <span className="ml-2">Toll Charges / AED 5</span>
    </div>

    <div className="flex items-center">
      <h1 className="font-thin text-[#F800C0]">Model:</h1>
      <span className="ml-2">Escalade Platinum Sport</span>
    </div>

    <div className="flex items-center">
      <h1 className="font-thin text-[#F800C0]">Seating Capacity:</h1>
      <span className="ml-2">7 Passengers</span>
    </div>

    <div className="flex items-center">
      <h1 className="font-thin text-[#F800C0]">Fits No. of Bags:</h1>
      <span className="ml-2">3</span>
    </div>
  </div>

  <div className='my-6  space-x-4'>
    <button className='bg-gradient-to-r from-[#7670FF] to-[#5B42FF] rounded-full text-sm font-thin px-4 py-2'>Enquiry Now</button>
    <button className='bg-gradient-to-r from-[#7670FF] to-[#5B42FF] rounded-full text-sm font-thin px-4 py-2'>Talk to Agent</button>
  </div>
</div>

          </div>
        </div>

         
      </div>

      {/* Right Section with Same Opacity Background */}
      <div className="w-[50%] relative rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>
  
  <div className="relative p-6">
    {/* Title & Filter Container */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-white text-2xl font-semibold">Similar Motors 3843</h2>

      {/* Filter Dropdown - Positioned to Right */}
      <div className="ml-auto">
        <select
          className="px-4 py-2 text-white rounded-full border border-[#5B42FF] bg-gradient-to-r from-[#7670FF] to-[#5B42FF] focus:outline-none focus:ring-2 focus:ring-[#7670FF]"
          style={{ boxShadow: "0px 0px 8px 0px #4B4CFF" }}
        >
          <option value="latest">Sort and Filter</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </div>

    {/* Car Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {carList.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  </div>

  {/* Load More Button */}
  <div className="flex justify-center mt-8 mb-6">
    <button className="bg-[#7670FF] text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-[#5B42FF] transition duration-300" style={{ fontFamily: "Gotham Rounded, sans-serif" }}>
      Load More
    </button>
  </div>
</div>


    </div>
    <div className='my-6 mx-8'>
    <img src={enquire} alt="" />
</div></>
  );
};

export default Page2;
