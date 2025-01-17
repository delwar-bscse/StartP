import React, { useEffect } from 'react'
import service1 from '../assets/images/service1.png'
import circleShape from '../assets/images/cercleShape.png'

import { GrStorage } from "react-icons/gr";
import { FaRegFile, FaRegFolder } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import ProgressBar from '../components/ProgressBar';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200
    })
  },[]);

  return (
    <div className='bg-[#fffcfc] py-20'>
      <div className='w-[90%] max-w-[1440px] m-auto flex max-lg:flex-col-reverse justify-center gap-16 sm:gap-32 lg:gap-7'>
        <div className='basis-1/2'>
          <div className='flex flex-col items-start justify-start gap-5 pb-10'>
            <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>Cloud Hosting Services</h2>
            <div>
            <ProgressBar />
            </div>
            <p className=' text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <ul className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-5'>
            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <GrStorage className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Cloud databases</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <CiGlobe className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Website hosting</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <FaRegFile className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>File storage</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <HiMiniArrowTrendingUp className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Forex trading</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <FaRegFolder className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>File backups</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <FiMonitor className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Remote desktop</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <MdOutlineMail className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Email servers</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <IoMdCloudOutline className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Hybrid cloud</p>
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='relative basis-1/2 flex justify-center items-center'>
          <img src={service1} alt="Design image" className='w-[60%]' />

          <img src={circleShape} alt="circle shape" className='absolute w-[90%] rotateAnimation'/>
        </div>
      </div>
    </div>
  )
}

export default Services