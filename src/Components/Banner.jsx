import React from 'react';

const Banner = () => {
  return (
    <div className='items-center'>
      <h1>We Build Productive Apps</h1>
      <p>
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact
      </p>
      <div className='items-center'>
     <a href="https://play.google.com/"><button className='border-2 p-1 mx-2 rounded-2xl shadow-2xl font-semibold text-[20px]'>Google Play</button></a>
     <a href="https://www.apple.com/app-store/"><button className='border-2 p-1 mx-2 rounded-2xl shadow-2xl font-semibold text-[20px]'>App Store</button></a>
      </div>
    </div>
  );
};

export default Banner;