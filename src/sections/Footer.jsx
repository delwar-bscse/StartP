import React from 'react'
import logoFooter from '../assets/images/logoFooter.png'
import bgFooter from '../assets/images/bgFooter.png'
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin   } from "react-icons/sl";
import { GrLocation, GrMailOption, GrPhone  } from "react-icons/gr";

const Footer = () => {
  return (
    <div id='footerSection' className='bg-center bg-no-repeat bg-[#F7FAFD]' style={{backgroundImage:`url(${bgFooter})`}}>
      <div className='w-[90%] max-w-[1440px] m-auto'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start gap-10 py-[50px]'>
          <div>
            <img src={logoFooter} alt="Company Logo" />
            <p className='text-gray-500 pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-500'>Company</h3>
            <ul className='text-gray-500 pt-6'>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">About</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Services</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Features</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Our Pricing</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Latest News</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-500'>Support</h3>
            <ul className='text-gray-500 pt-6'>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">FAP's</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Primary Policy</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Terms & Conditions</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Team</a></li>
              <li className='hover:text-green-500 hover:ps-1 duration-500'><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-500'>Address</h3>
            <div className='text-gray-500 flex flex-col gap-y-2 pt-6'>
              <div className='flex justify-start items-normal gap-x-2 text-center'>
                <GrLocation className='text-xl'/>
                <p>27 Division St, New York,<br /> NY 10002, USA</p>
              </div>
              <div className='flex justify-start items-normal gap-x-2'>
                <GrMailOption />
                <p>Email: startp@gmail.com</p>
              </div>
              <div className='flex justify-start items-normal gap-x-2'>
                <GrPhone />
                <p>Phone: + (321) 984 754</p>
              </div>
            </div>
            <div className='text-gray-500 pt-5'>
              <ul className='flex justify-start items-center gap-3'>
                <li className='rounded-full border-[1px] border-gray-400 p-2 hover:border-blue-700'>
                  <a href="#"><SlSocialFacebook className='hover:text-blue-700 text-xl'/></a>
                </li>
                <li className='rounded-full border-[1px] border-gray-400 p-2 hover:border-blue-700'>
                  <a href="#"><SlSocialTwitter className='hover:text-blue-700 text-xl' /></a>
                </li>
                <li className='rounded-full border-[1px] border-gray-400 p-2 hover:border-blue-700'>
                  <a href="#"><SlSocialInstagram className='hover:text-blue-700 text-xl' /></a>
                </li>
                <li className='rounded-full border-[1px] border-gray-400 p-2 hover:border-blue-700'>
                  <a href="#"><SlSocialLinkedin className='hover:text-blue-700 text-xl' /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='py-4 border-t-2'>
          <p className='text-center text-gray-600'>Copyright &#169;2024 StartP. All rights reserved by <span className='text-black'>EnvyTheme</span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer;