import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-6 mt-4 '>
        <img src={logo} alt="" className='h-16' />

         <div className='flex items-center justify-between' >
         <div className="gradient-border text-white flex items-center space-x-4 justify-between mx-4 my-2 p-4">
  <div>Buy</div>
  <div>Sell</div>
  <div>Rent</div>
</div>





    
             <button>Sign in</button>

         </div>
    </div>
  )
}

export default Navbar