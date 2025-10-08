import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-black'> 
      <div className='m-10 p-10'>
         <div className='flex justify-between items-center '>
          <h1 className='text-white'>HERO.IO</h1>
          <div>
             <h1 className='text-white text-2xl mb-2'>Social Link</h1>
             <span className='flex gap-7'>
          <FaFacebookSquare className='bg-white'/>
          <FaLinkedin className='bg-white'/>
          <FaXTwitter className='bg-white'/>
        </span>
          </div>
         
      </div>
      <div><h3 className='text-white text-center'>Copyright © 2025 - All right reserved</h3></div>
     </div>
    </footer>
  );
};

export default Footer;<h1>Hello Fo</h1>