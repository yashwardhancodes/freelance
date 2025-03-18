import React from 'react';
import { Heart, MapPin, Share2 } from 'lucide-react';

const Page2 = () => {
  return (
    <div className="my-6 mx-8 flex space-x-4">
      {/* Left Section */}
      <div className="w-[50%] relative rounded-lg">
        {/* Background Overlay with Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>

        {/* Content (No Opacity) */}
        <div className="relative min-h-screen   flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl max-w-3xl w-full overflow-hidden">
            {/* Top Icons */}
            <div className="absolute top-6 left-6 right-6 flex-col justify-between z-10">
              

              <div className=" flex flex-col gap-4">
              <button className="bg-white/80 backdrop-blur-sm w-fit p-3 rounded-full hover:bg-white transition-colors">
                <Heart className="w-6 h-6 text-gray-700" />
              </button>
                <button className="bg-white/80 backdrop-blur-sm w-fit p-3 rounded-full hover:bg-white transition-colors">
                  <MapPin className="w-6 h-6 text-gray-700" />
                </button>
                <button className="bg-white/80 backdrop-blur-sm w-fit p-3 rounded-full hover:bg-white transition-colors">
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
          </div>
        </div>
      </div>

      {/* Right Section with Same Opacity Background */}
      <div className="w-[50%] relative rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7670FF] to-[#5B42FF] opacity-10 rounded-lg"></div>
        <div className="relative p-6">
          <h2 className="text-white text-2xl font-bold">Right Section Content</h2>
          <p className="text-white">This is some sample content.</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
