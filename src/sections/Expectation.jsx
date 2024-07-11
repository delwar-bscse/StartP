import React, { useEffect } from 'react'
import { expectationData } from '../assets/data';
import bgFooter from '../assets/images/bgFooter.png'
import ProgressBar from '../components/ProgressBar';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Expectation = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  },[]);

  return (
    <div className='py-20 bg-center bg-no-repeat'  style={{backgroundImage:`url(${bgFooter})`}}>
      <div className='w-[90%] max-w-[1440px] m-auto'>
        <div data-aos="fade-down" data-aos-delay="400" className='flex flex-col items-center justify-start gap-5 pb-10'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-700 text-center'>We Always Try To Understand Users Expectation</h2>
          <div>
          <ProgressBar />
          </div>
          <p className='text-center text-gray-400 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between gap-10 mt-10'>
          {expectationData?.map((item,index)=>(
            <div data-aos="zoom-in" data-aos-delay="400"  key={index} className='flex flex-col items-center'>
              <h3 className='text-4xl text-green-600 font-semibold'>{item.value}</h3>
              <p className='text-gray-500 font-semibold'>{item.txt}</p>
            </div>
          ))}
        </div>
        <div  data-aos="fade-up" data-aos-delay="400"  className='max-w-[600px] m-auto flex max-md:flex-col justify-between items-center gap-5 border-dashed border-2 px-3 md:px-10 py-6 mt-20'>
          <div className='flex flex-col'>
            <h3 className='text-xl text-gray-700 font-semibold'>Have any question about us?</h3>
            <p className='text-gray-500'>Don't hesitate to contact us</p>
          </div>
          <button className='bg-green-500 hover:bg-indigo-500 px-5 py-3 rounded-md text-white font-semibold'>CONTACT US</button>
        </div>
      </div>
    </div>
  )
}

export default Expectation