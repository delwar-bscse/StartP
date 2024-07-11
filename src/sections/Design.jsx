import React from 'react'
import design1 from '../assets/images/design1.png'
import { CiMobile2 } from "react-icons/ci";
import { AiOutlineLayout } from "react-icons/ai";
import { PiBracketsAngle, PiPercent } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ProgressBar from '../components/ProgressBar';

const Design = () => {
  return (
    <div className='bg-[#fffcfc] py-20'>
      <div className='w-[90%] m-auto flex max-lg:flex-col justify-center gap-5'>
        <div className='basis-1/2 flex justify-center items-center'>
          <img src={design1} alt="Design image" className='' />
        </div>
        <div className='basis-1/2'>
          <div className='flex flex-col items-start justify-start gap-5 pb-10'>
            <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>Design & Development</h2>
            <div>
              <ProgressBar />
            </div>
            <p className=' text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className=''>
            <ul className=' grid grid-cols-1 sm:grid-cols-2 justify-between gap-5'>
              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <AiOutlineLayout className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>Responsive design</p>
              </li>

              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <PiBracketsAngle className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>React web development</p>
              </li>

              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <CiMobile2 className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>Android apps development</p>
              </li>

              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <PiBracketsAngle className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>Laravel web development</p>
              </li>

              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <CiMobile2 className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>iOS apps development</p>
              </li>

              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <PiPercent className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>UX/UI design</p>
              </li>

              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <FiShoppingCart className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>E-commerce development</p>
              </li>

              <li className='group hover:bg-green-500 duration-500 hover:-translate-y-1 flex gap-3 bg-white shadow-md p-3 rounded-sm'>
                <IoMdCheckmarkCircleOutline className='text-green-600 text-2xl group-hover:text-white' />
                <p className='text-gray-400 font-semibold group-hover:text-white'>Print ready design</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Design