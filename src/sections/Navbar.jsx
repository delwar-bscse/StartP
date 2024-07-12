import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/images/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isPages, setIsPages] = useState(false);
  return (
    <div>
      <div className='fixed z-20 shadow-md w-full top-0 bg-white'>
        <div className='w-[90%] max-w-[1440px] m-auto'>
          <div className='flex justify-between items-center max-lg:p-3'>
            <div><img src={logo} alt="company logo" /></div>
            <div className='flex justify-end items-center gap-10'>
              <div className='flex justify-between items-center gap-7 max-lg:hidden'>
                <div className='group relative flex justify-between items-center gap-2 cursor-pointer py-5'>
                  <p className='font-semibold text-gray-500 group-hover:text-green-500'>Home</p>
                  <IoIosArrowDown className='text-gray-500 group-hover:text-green-500'/>
                  <div className='absolute hidden group-hover:flex top-[60px] flex-col justify-between items-start gap-3 w-[250px] bg-white p-3 shadow-md rounded-md font-semibold text-gray-500'>
                    <p className='hover:text-green-500'>IT Startup</p>
                    <p className='hover:text-green-500'>IOT</p>
                    <p className='hover:text-green-500'>Hosting</p>
                    <p className='hover:text-green-500'>Machine Learning</p>
                    <p className='hover:text-green-500'>Bigdata Analytics</p>
                    <p className='hover:text-green-500'>Digital Agency</p>
                    <p className='hover:text-green-500'>Digital Agency Portfolio</p>
                    <p className='hover:text-green-500'>PC Repair</p>
                  </div>
                </div>
                <div className='group relative flex justify-between items-center gap-2 cursor-pointer py-5'>
                  <p className='font-semibold text-gray-500 group-hover:text-green-500'>About</p>
                  <IoIosArrowDown className='text-gray-500 group-hover:text-green-500'/>
                  <div className='absolute hidden group-hover:flex top-[60px] flex-col justify-between items-start gap-3 w-[250px] bg-white p-3 shadow-md rounded-md font-semibold text-gray-500'>
                    <p className='hover:text-green-500'>About Style 1</p>
                    <p className='hover:text-green-500'>About Style 2</p>
                    <p className='hover:text-green-500'>About Style 3</p>
                  </div>
                </div>
                <div className='group relative flex justify-between items-center gap-2 cursor-pointer py-5'>
                  <p className='font-semibold text-gray-500 group-hover:text-green-500'>Pages</p>
                  <IoIosArrowDown className='text-gray-500 group-hover:text-green-500'/>
                  <div className='absolute hidden group-hover:flex top-[60px] flex-col justify-between items-start gap-3 w-[250px] bg-white p-3 shadow-md rounded-md font-semibold text-gray-500'>
                    <p className='hover:text-green-500'>Features</p>
                    <p className='hover:text-green-500'>Services</p>
                    <p className='hover:text-green-500'>Feedback</p>
                    <p className='hover:text-green-500'>Projects</p>
                    <p className='hover:text-green-500'>Team</p>
                    <p className='hover:text-green-500'>Pricing</p>
                    <p className='hover:text-green-500'>User</p>
                    <p className='hover:text-green-500'>FAQ's</p>
                    <p className='hover:text-green-500'>Coming Soon</p>
                    <p className='hover:text-green-500'>404 Error Page</p>
                  </div>
                </div>
                <div className='group relative flex justify-between items-center gap-2 cursor-pointer py-5'>
                  <p className='font-semibold text-gray-500 group-hover:text-green-500'>Shop</p>
                  <IoIosArrowDown className='text-gray-500 group-hover:text-green-500'/>
                  <div className='absolute hidden group-hover:flex top-[60px] flex-col justify-between items-start gap-3 w-[250px] bg-white p-3 shadow-md rounded-md font-semibold text-gray-500'>
                    <p className='hover:text-green-500'>Shop</p>
                    <p className='hover:text-green-500'>Checkout</p>
                  </div>
                </div>
                <div className='group relative flex justify-between items-center gap-2 cursor-pointer py-5'>
                  <p className='font-semibold text-gray-500 group-hover:text-green-500'>Blog</p>
                  <IoIosArrowDown className='text-gray-500 group-hover:text-green-500'/>
                  <div className='absolute hidden group-hover:flex top-[60px] flex-col justify-between items-start gap-3 w-[250px] bg-white p-3 shadow-md rounded-md font-semibold text-gray-500'>
                    <p className='hover:text-green-500'>Blog Grid</p>
                    <p className='hover:text-green-500'>Blog Right Sidebar</p>
                    <p className='hover:text-green-500'>Blog Grid 2</p>
                    <p className='hover:text-green-500'>Blog Right Sidebar 2</p>
                    <p className='hover:text-green-500'>Blog Grid 3</p>
                    <p className='hover:text-green-500'>Blog Right Sidebar 3</p>
                    <p className='hover:text-green-500'>Blog Details</p>
                  </div>
                </div>
                <div className='group relative flex justify-between items-center gap-2 cursor-pointer py-5'>
                  <p className='font-semibold text-gray-500 group-hover:text-green-500'>Contact</p>
                </div>
              </div>
              <div className='flex justify-between items-center gap-3'>
                <div className='relative cursor-pointer'>
                <FiShoppingCart />
                <span className='absolute -top-1 -right-1 text-[10px] bg-red-500 text-white px-[2px] rounded-full leading-3'>0</span>
                </div>
                <button className='px-5 py-[6px] rounded-sm text-sm font-semibold box-border text-gray-600 border-[2px] border-dashed active:bg-gray-50 max-md:hidden'>SUPPORT</button>
                <button className='bg-[#c679e3] px-2 md:px-5 py-1 md:py-2 rounded-sm text-[11px] md:text-sm font-semibold text-white hover:bg-green-500 active:bg-green-300 duration-500'>LOGIN</button>
                <button className='text-3xl lg:hidden' onClick={()=>setIsMenu(!isMenu)}>{isMenu ? < IoClose /> : < IoMdMenu/>}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ..........Mobile Menu .............. */}
      <div className={`fixed z-10 left-0 ${isMenu ? "translate-x-0" : "-translate-x-[400px]"} transition-all duration-700 top-[60px] lg:hidden flex flex-col border-r-2 w-[300px] bg-white h-screen overflow-y-scroll pb-20 shadow-sm`}>
      <div className='relative w-full border-b-2'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-gray-500 group-hover:text-green-500 px-4 py-2'>Home</p>
          <p className='text-gray-500 text-2xl group-hover:text-green-500 px-4 py-2' onClick={()=>setIsHome(!isHome)}>{isHome ? "-" : "+"}</p>
        </div>
        {isHome && <div className='bg-white w-[300px] font-semibold text-gray-500'>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>IT Startup</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>IOT</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Hosting</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Machine Learning</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Bigdata Analytics</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Digital Agency</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Digital Agency Portfolio</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>PC Repair</p>
        </div>}
      </div>
      <div className='relative w-full border-b-2'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-gray-500 group-hover:text-green-500 px-4 py-2'>About</p>
          <p className='text-gray-500 text-2xl group-hover:text-green-500 px-4 py-2' onClick={()=>setIsAbout(!isAbout)}>{isAbout ? "-" : "+"}</p>
        </div>
        {isAbout && <div className='bg-white w-[300px] font-semibold text-gray-500'>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>About Style 1</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>About Style 2</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>About Style 3</p>
        </div>}
      </div>
      <div className='relative w-full border-b-2'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-gray-500 group-hover:text-green-500 px-4 py-2'>Pages</p>
          <p className='text-gray-500 text-2xl group-hover:text-green-500 px-4 py-2' onClick={()=>setIsPages(!isPages)}>{isPages ? "-" : "+"}</p>
        </div>
        {isPages && <div className='bg-white w-[300px] font-semibold text-gray-500'>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Features</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Services</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Feedback</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Projects</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Team</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Pricing</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>User</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>FAQ's</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>Coming Soon</p>
          <p className='hover:text-green-500 border-2 border-b-0 py-2 px-7'>404 Error Page</p>
        </div>}
      </div>
      <div className='relative w-full border-b-2'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-gray-500 group-hover:text-green-500 px-4 py-2'>Shop</p>
        </div>
      </div>
      <div className='relative w-full border-b-2'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-gray-500 group-hover:text-green-500 px-4 py-2'>Blog</p>
        </div>
      </div>
      <div className='relative w-full border-b-2'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-gray-500 group-hover:text-green-500 px-4 py-2'>Contact</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar