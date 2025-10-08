import React from 'react';
import heroImg from '../assets/hero.png'
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";


const Banner = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-[36px] font-bold text-center'>We Build <span className='text-[#632EE3]'><br />Productive</span> Apps</h1>
      <p className='text-center mb-5 px-20'>
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact
      </p>
      <div className='items-center mb-5'>
     <a href="https://play.google.com/"><button className='border-2 p-1 mx-2 rounded-2xl shadow-2xl font-semibold text-[10px]'><span className='flex gap-2 items-center'><FaGooglePlay />Google Play</span></button></a>
     <a href="https://www.apple.com/app-store/"><button className='border-2 p-1 mx-2 rounded-2xl shadow-2xl font-semibold text-[10px]'><span className='flex gap-2 it'><FaAppStoreIos />App Store</span></button></a>
      </div>
      <div>
       <img src={heroImg} alt="" />
      </div>
      <div className='bg-[#632EE3] p-10 rounded-2xl w-full'>
        <div>
          <h2 className='text-white font-bold text-3xl text-center mb-2'>Trusted by Millions, Built for You</h2>
          <div className='grid grid-cols-3 gap-10'>
            <div className='text-white text-center'>
              <p>Total Downloads</p>
              <h1 className='text-4xl font-bold'>29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div className='text-white text-center'>
              <p>Total Reviews</p>
              <h1 className='text-4xl font-bold'>906K</h1>
              <p>46% more than last month</p>
            </div>
            <div className='text-white text-center'>
              <p>Active Apps</p>
              <h1 className='text-4xl font-bold'>132+</h1>
              <p>31 more will Launch</p>
            </div>
           
          </div>
       </div>
      </div>
    </div>
  );
};

export default Banner;