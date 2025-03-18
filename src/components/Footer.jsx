import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <div className='flex items-center text-sm justify-between mx-8 '>

        <div><h1 className='text-[#4B4CFF]'>© 2025  Copyright motorsfinder.ai / All Rights Reserved.</h1></div>
        <div className="flex gap-4  ">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="size-4 text-[#4B4CFF]" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <Youtube className="size-4 text-[#4B4CFF]" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="size-4 text-[#4B4CFF]" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="size-4 text-[#4B4CFF]" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="size-4 text-[#4B4CFF]" />
      </a>
    </div>
        <div className='text-[#4B4CFF] font-semibold  space-x-4'>
            <a href="">Language:  <span className='text-white'>English</span> </a>
            <a href="">Country:<span className='text-white'>UAE</span></a>
            <a href="">About Us </a>
            <a href="">Privacy</a>
            <a href="">Help Center</a>
        </div>
    </div>
  )
}

export default Footer