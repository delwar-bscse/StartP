import React, { useEffect } from 'react'
import {newsData} from '../assets/data';
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProgressBar from '../components/ProgressBar';
import AOS from 'aos'
import 'aos/dist/aos.css'

const News = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  },[]);

  return (
    <div className='mt-14'>
      <div className='w-[90%] max-w-[1440px] m-auto'>
        <div data-aos="fade-down" data-aos-delay="400" className='flex flex-col items-center justify-start gap-5 pb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>The News From Our Blog</h2>
          <div>
            <ProgressBar />
          </div>
          <p className='text-center text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 mb-20'>
          {newsData?.map((item,index)=>(
            <div data-aos="zoom-in" data-aos-delay="400" key={index} className='shadow-lg hover:bg-white bg-[#f7fafd]'>
              <div className='relative'>
                <img className='' src={item.image} alt="blog image" />
                <div className='flex justify-center items-center gap-1 rounded-full bg-[#2CC8AE] py-2 px-3 text-white absolute -bottom-5 left-5'>
                  <MdOutlineDateRange />
                  <p className='rounded-lg bg-'>{item.date}</p>
                </div>
              </div>
              <div className='pt-10 pb-7 ps-5 text-gray-700 flex flex-col justify-start items-start gap-5 duration-300'>
                <h2 className='text-xl md:text-2xl font-semibold'>{item.title}</h2>
                <p className='text-gray-900'>By <span className='text-gray-500'>{item.name}</span></p>
                <p className='text-gray-500 pr-1'>{item.txt}</p>
                <div className='flex justify-start items-center gap-1 text-gray-900 cursor-pointer hover:text-green-500'>
                  <p>Read More </p>
                  <IoIosArrowRoundForward className='text-2xl'/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News