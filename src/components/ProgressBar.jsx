import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './progress.css'

const ProgressBar = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  },[]);

  return (
    <div>
      <div id='progressBar' className='w-[90px] h-[5px] bg-[#cdf1d8] rounded-md relative'></div>
    </div>
  )
}

export default ProgressBar