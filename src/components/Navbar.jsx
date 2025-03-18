import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className='flex h-12 justify-between items-center mx-8 mt-6 '>
            <img src={logo} alt="" className='h-16' />

            <div className='flex items-center space-x-4 justify-between' >
                <div className="gradient-border text-white flex items-center space-x-5 justify-between px-4  py-2">
                    <div>Buy</div>
                    <div>Sell</div>
                    <div>Rent</div>
                </div>

                <button className="  text-white px-4  py-2 rounded-full     "

                    style={{
                        background: "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
                        boxShadow: "0px 0px 8px 0px #4B4CFF",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                    }}>
                    Sign In
                </button>

            </div>
        </div>
    )
}

export default Navbar