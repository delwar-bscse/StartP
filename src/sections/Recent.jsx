import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {worksData} from '../assets/data';
import { IoSettingsOutline } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProgressBar from "../components/ProgressBar";

const Recent = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  },[]);

  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {breakpoint: 1040, settings: {slidesToShow: 3}},
      {breakpoint: 800, settings: {slidesToShow: 2}},
      {breakpoint: 570, settings: {slidesToShow: 1}},
    ],
  };


  return (
    <div className="bg-[#f7fafd] py-20">
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col items-center justify-start gap-5 pb-10'>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>Our Recent Works</h2>
        <div>
          <ProgressBar />
        </div>
        <p className='text-center text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="">
      <Slider {...settings}>
        {worksData?.map((item,index)=>(
          <div key={index} className="relative group overflow-hidden w-full">
            <div className="flex justify-center items-center">
              <img src={item.image} alt="transaction image" className="w-[95%]" />
            </div>

            <div className="absolute inset-0 w-[95%] m-auto bg-gradient-to-r to-green-400/90 from-blue-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>

            <div className="absolute translate-y-[300px] transition-all group-hover:translate-y-0 duration-500 inset-0 flex flex-col gap-2 justify-end items-start p-5 w-[95%]">
              <h3 className="text-xl text-white">{item.title}</h3>
              <p className="text-white leading-5 text-[13px]">{item.txt}</p>
            </div>

            <div className="absolute top-5 right-12 -translate-y-[200px] group-hover:-translate-y-0 transition-all duration-500 bg-white p-3 rounded-full">
              <IoSettingsOutline className="text-2xl"/>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default Recent

{/* 
<div class="relative group bg-red-300 overflow-hidden w-[400px] m-auto">
  <div class="h-96 text-center">Md. Delwar Hossain</div>
  <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-700 translate-y-[100%] group-hover:translate-y-0">
    <h1 class="font-dmserif text-3xl font-bold text-white">Beauty</h1>
    <p class="mb-3 text-lg italic text-white transition-opacity duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
    <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
  </div>
</div> 
*/}