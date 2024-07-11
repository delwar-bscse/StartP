import React, { useEffect } from 'react'
import { IoSettingsOutline, IoCubeOutline  } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoBell } from "react-icons/go";
import ProgressBar from '../components/ProgressBar';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Feature = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200
    })
  },[]);

  return (
    <div className='bg-[#f7fafd] py-20'>
      <div className='w-[90%] max-w-[1440px] m-auto'>
        <div data-aos="zoom-in" data-aos-delay="400"  className='flex flex-col items-center justify-start gap-5 pb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>Our Features</h2>
          <div>
          <ProgressBar />
          </div>
          <p className='text-center text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='group flex max-lg:flex-col gap-3 items-start bg-white shadow-sm p-5 rounded-md hover:-translate-y-3 transition-all duration-500'>
            <div className='p-3 rounded-full bg-green-200 group-hover:bg-green-700 duration-500'><IoSettingsOutline className='text-3xl text-green-900 group-hover:text-white'/></div>
            <div className='flex flex-col justify-between gap-2'>
              <h3 className='text-xl font-semibold text-gray-700'>Incredible Infrastructure</h3>
              <p className='text-gray-400'>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
          
          <div className='group flex max-lg:flex-col gap-3 items-start bg-white shadow-sm p-5 rounded-md hover:-translate-y-3 transition-all duration-500'>
            <div className='p-3 rounded-full bg-green-200 group-hover:bg-green-700'><CiMail className='text-3xl text-green-900 group-hover:text-white'/></div>
            <div className='flex flex-col justify-between gap-2'>
              <h3 className='text-xl font-semibold text-gray-700'>Email Notifications</h3>
              <p className='text-gray-400'>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>

          <div className='group flex max-lg:flex-col gap-3 items-start bg-white shadow-sm p-5 rounded-md hover:-translate-y-3 transition-all duration-500'>
            <div className='p-3 rounded-full bg-indigo-200 group-hover:bg-indigo-700'><RxDashboard className='text-3xl text-green-900 group-hover:text-white'/></div>
            <div className='flex flex-col justify-between gap-2'>
              <h3 className='text-xl font-semibold text-gray-700'>Simple Dashboard</h3>
              <p className='text-gray-400'>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>

          <div className='group flex max-lg:flex-col gap-3 items-start bg-white shadow-sm p-5 rounded-md hover:-translate-y-3 transition-all duration-500'>
            <div className='p-3 rounded-full bg-indigo-200 group-hover:bg-indigo-700'><IoIosInformationCircleOutline className='text-3xl text-green-900 group-hover:text-white'/></div>
            <div className='flex flex-col justify-between gap-2'>
              <h3 className='text-xl font-semibold text-gray-700'>Information Retrieval</h3>
              <p className='text-gray-400'>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>

          <div className='group flex max-lg:flex-col gap-3 items-start bg-white shadow-sm p-5 rounded-md hover:-translate-y-3 transition-all duration-500'>
            <div className='p-3 rounded-full bg-red-200 group-hover:bg-red-600'><IoCubeOutline className='text-3xl text-green-900 group-hover:text-white'/></div>
            <div className='flex flex-col justify-between gap-2'>
              <h3 className='text-xl font-semibold text-gray-700'>Drag & Drop Functionality</h3>
              <p className='text-gray-400'>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>

          <div className='group flex max-lg:flex-col gap-3 items-start bg-white shadow-sm p-5 rounded-md hover:-translate-y-3 transition-all duration-500'>
            <div className='p-3 rounded-full bg-red-200 group-hover:bg-red-600'><GoBell className='text-3xl text-green-900 group-hover:text-white'/></div>
            <div className='flex flex-col justify-between gap-2'>
              <h3 className='text-xl font-semibold text-gray-700'>Deadline Reminders</h3>
              <p className='text-gray-400'>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Feature