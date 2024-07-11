import React, { useEffect } from 'react'
import ProgressBar from '../components/ProgressBar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Pricing = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200
    })
  },[]);

  return (
    <div className='bg-[#f9f6f6] py-14'>
      <div className='w-[90%] m-auto'>
        <div data-aos="fade-down"  data-aos-delay="200" className='flex flex-col items-center justify-start gap-5 pb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>Pricing Plans</h2>
          <div>
            <ProgressBar />
          </div>
          <p className='text-center text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          <div data-aos="zoom-in"  data-aos-delay="400" className='group flex flex-col justify-start items-center shadow-md bg-white pb-8'>
            <div className='border-b-[2px] w-full bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500'>
              <h2 className='border-gray-500 text-gray-600 py-8 text-center text-xl font-semibold group-hover:text-white'>BASIC PLAN</h2>
            </div>
            <ul className='flex flex-col justify-start items-center gap-3 text-gray-500 p-10'>
              <li className='text-3xl font-bold text-green-500'>$ 15.00 <span className=' text-sm'>/Mon</span></li>
              <li>5 GB Bandwidth</li>
              <li>Highest Speed</li>
              <li>1 GB Storage</li>
              <li>Unlimited Website</li>
              <li>Unlimited Users</li>
              <li>24x7 Great Support</li>
              <li className='line-through'>Data Security and Backups</li>
              <li className='line-through'>Monthly Reports and Analytics</li>
            </ul>
            <button className='rounded-lg bg-green-500 hover:bg-indigo-500 text-white font-semibold px-5 py-3'>SELECT PLAN</button>
          </div>
          
          <div data-aos="zoom-in"  data-aos-delay="400"  className='group flex flex-col justify-start items-center shadow-md bg-white pb-8'>
            <div className='border-b-[2px] w-full bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500'>
              <h2 className='border-gray-500 text-gray-600 py-8 text-center text-xl font-semibold group-hover:text-white'>ADVANCED PLAN</h2>
            </div>
            <ul className='flex flex-col justify-start items-center gap-3 text-gray-500 p-10'>
              <li className='text-3xl font-bold text-green-500'>$ 35.00 <span className=' text-sm'>/Mon</span></li>
              <li>10 GB Bandwidth</li>
              <li>Highest Speed</li>
              <li>3 GB Storage</li>
              <li>Unlimited Website</li>
              <li>Unlimited Users</li>
              <li>24x7 Great Support</li>
              <li>Data Security and Backups</li>
              <li className='line-through'>Monthly Reports and Analytics</li>
            </ul>
            <button className='rounded-lg bg-green-500 hover:bg-indigo-500 text-white font-semibold px-5 py-3'>SELECT PLAN</button>
          </div>

          <div data-aos="zoom-in"  data-aos-delay="400"  className='group flex flex-col justify-start items-center shadow-md bg-white pb-8'>
            <div className='border-b-[2px] w-full bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500'>
              <h2 className='border-gray-500 text-gray-600 py-8 text-center text-xl font-semibold group-hover:text-white'>EXPERT PLAN</h2>
            </div>
            <ul className='flex flex-col justify-start items-center gap-3 text-gray-500 p-10'>
              <li className='text-3xl font-bold text-green-500'>$ 65.00 <span className=' text-sm'>/Mon</span></li>
              <li>15 GB Bandwidth</li>
              <li>Highest Speed</li>
              <li>5 GB Storage</li>
              <li>Unlimited Website</li>
              <li>Unlimited Users</li>
              <li>24x7 Great Support</li>
              <li>Data Security and Backups</li>
              <li>Monthly Reports and Analytics</li>
            </ul>
            <button className='rounded-lg bg-green-500 hover:bg-indigo-500 text-white font-semibold px-5 py-3'>SELECT PLAN</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pricing