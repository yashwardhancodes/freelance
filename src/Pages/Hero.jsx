import React from 'react';
import robot from "../assets/robot.png";
import popularBrands from "../assets/RentalCars.png";
import rentalCars from "../assets/RentalCars.png";
import luxuryCars from "../assets/topBrans.png";
import carsForSell from "../assets/RentalCars.png"
import suv from "../assets/suv.png"
import topBrands from "../assets/topBrans.png";
import ChatInput from '../components/ChatInput';
import Register from "../assets/register.png"

const Hero = () => {
  return (
    <div className="h-[calc(100vh-7rem)]">
      <div className="relative h-[50%] flex items-center justify-center">
        <img src={robot} className="w-[500px] h-auto mt-20" alt="Robot" />
        <img src={popularBrands} alt=""  className='absolute h-24 top-4'/>
        <img src={topBrands} alt=""  className='absolute h-24 top-20 left-90'/>
        <img src={rentalCars} alt=""  className='absolute h-24 top-60 left-[390px]'/>
        <img src={suv} alt=""  className='absolute h-24 top-40 left-40'/>
        <img src={luxuryCars} alt=""  className='absolute h-24 top-32 right-96'/>
        <img src={carsForSell} alt=""  className='absolute h-24 top-68 right-96'/>
        <img src={suv} alt=""  className='absolute h-24 top-44 right-40'/>


      </div>
      <div className='flex justify-center iems-center '>
      <h1 className='font-[Gotham Rounded] text-[#7670FF] text-5xl  mt-10 '>Find Your Motor with AI-Powered Agent</h1>

      </div>
      

        <ChatInput/>

        <div className='flex justify-center mt-4  items-center '>

            <div className='flex justify-center space-x-2 items-center'>
                <img src={Register} alt=""  className='size-10 '/>
                <a href="" className='text-[#F800C0] font-semibold'>Register with Motors</a>
            </div>
 
      </div>

    
    </div>
  );
};

export default Hero;
