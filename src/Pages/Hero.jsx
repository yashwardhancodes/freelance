import React from 'react';
import robot from "../assets/robot.png";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-5rem)]">
      <div className="relative h-[50%] flex items-center justify-center">
        <img src={robot} className="w-1/3 h-auto" alt="Robot" />
      </div>
    </div>
  );
};

export default Hero;
