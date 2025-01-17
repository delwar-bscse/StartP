import React, { useEffect } from 'react'
import design1 from '../assets/images/design1.png'
import circleShape from '../assets/images/cercleShape.png'
import { CiMobile2 } from "react-icons/ci";
import { AiOutlineLayout } from "react-icons/ai";
import { PiBracketsAngle, PiPercent } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ProgressBar from '../components/ProgressBar';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const Design = () => {
  
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
      <div className='w-[90%] max-w-[1440px] m-auto flex max-lg:flex-col justify-center gap-24 sm:gap-32 lg:gap-7'>
        <div data-aos="zoom-in" data-aos-delay="400" className='relative basis-1/2 flex justify-center items-center'>
          <img src={design1} alt="Design image" className='w-[55%]' />

          <img src={circleShape} alt="circle shape" className='absolute w-[90%] rotateAnimation'/>
        </div>
        <div className='basis-1/2'>
          <div className='flex flex-col items-start justify-start gap-5 pb-10'>
            <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>Design & Development</h2>
            <div>
              <ProgressBar />
            </div>
            <p className=' text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <ul className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-5'>
            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <AiOutlineLayout className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Responsive design</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <PiBracketsAngle className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>React web development</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <CiMobile2 className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Android apps development</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <PiBracketsAngle className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Laravel web development</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <CiMobile2 className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>iOS apps development</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <PiPercent className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>UX/UI design</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <FiShoppingCart className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>E-commerce development</p>
            </li>

            <li className='group hover:bg-green-500 cursor-pointer duration-500 flex gap-3 bg-white shadow-lst p-3 rounded-sm'>
              <IoMdCheckmarkCircleOutline className='text-green-600 text-2xl group-hover:text-white' />
              <p className='text-gray-400 font-semibold group-hover:text-white'>Print ready design</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Design