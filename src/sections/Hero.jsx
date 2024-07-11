import React from 'react'
import mainPic from '../assets/images/main-pic.png'
import { CgDatabase } from "react-icons/cg";
import { PiBracketsAngleBold } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { LuGitBranch } from "react-icons/lu";

const Hero = () => {
  return (
    <div>
      <div className='w-[90%] m-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-end gap-10'>
          <div className='flex flex-col items-start gap-7'>
            <h2 className='text-3xl lg:text-5xl font-semibold text-gray-700'>Secure IT Solutions <br/>for a more secure <br/>environment</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
            <button className='bg-green-500 hover:bg-indigo-500 text-white font-semibold rounded-md px-7 py-3'>GET STARTED</button>
          </div>
          <div className='flex justify-center items-center'>
            <img src={mainPic} alt="Design image" className='w-[80%]' />
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
            <div className='group hover:bg-green-400 hover:border-white hover:border-solid hover:-translate-y-3 duration-300 flex flex-col gap-5 border-dashed border-[1px] shadow-sm border-green-200 px-5 py-7 rounded-md'>
              <span className='p-3 w-[55px] h-[55px] rounded-full bg-[#cdf1d8] group-hover:bg-white flex justify-center items-center'>
                <CgDatabase className='text-3xl text-[#44ce6f]' />
              </span>
              <h1 className='text-xl text-gray-700 font-semibold group-hover:text-gray-50'>Zero Configuration</h1>
              <p className='text-gray-400 group-hover:text-gray-50'>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
            </div>

            <div className='group hover:bg-green-400 hover:border-white hover:border-solid hover:-translate-y-3 duration-300 flex flex-col gap-5 border-dashed border-[1px] shadow-sm border-green-200 px-5 py-7 rounded-md'>
              <span className='p-3 w-[55px] h-[55px] rounded-full bg-[#f3e4ed] group-hover:bg-white flex justify-center items-center'>
                <PiBracketsAngleBold className='text-3xl text-[#f78acb]' />
              </span>
              <h1 className='text-xl text-gray-700 font-semibold group-hover:text-gray-50'>Zero Configuration</h1>
              <p className='text-gray-400 group-hover:text-gray-50'>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
            </div>

            <div className='group hover:bg-green-400 hover:border-white hover:border-solid hover:-translate-y-3 duration-300 flex flex-col gap-5 border-dashed border-[1px] shadow-sm border-green-200 px-5 py-7 rounded-md'>
              <span className='p-3 w-[55px] h-[55px] rounded-full bg-[#edc3fc] group-hover:bg-white flex justify-center items-center'>
                <CgDatabase className='text-3xl text-[#c679e3]' />
              </span>
              <h1 className='text-xl text-gray-700 font-semibold group-hover:text-gray-50'>Zero Configuration</h1>
              <p className='text-gray-400 group-hover:text-gray-50'>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
            </div>

            <div className='group hover:bg-green-400 hover:border-white hover:border-solid hover:-translate-y-3 duration-300 flex flex-col gap-5 border-dashed border-[1px] shadow-sm border-green-200 px-5 py-7 rounded-md'>
              <span className='p-3 w-[55px] h-[55px] rounded-full bg-[#eb6c3d31] group-hover:bg-white flex justify-center items-center'>
                <CgDatabase className='text-3xl text-[#eb6b3d]' />
              </span>
              <h1 className='text-xl text-gray-700 font-semibold group-hover:text-gray-50'>Zero Configuration</h1>
              <p className='text-gray-400 group-hover:text-gray-50'>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero