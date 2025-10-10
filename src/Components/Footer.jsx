import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="m-6 md:m-10 p-6 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
        
          <div className="flex items-center gap-2">
            <img className="w-6 h-6 md:w-[25px] md:h-[25px]" src={logoImg} alt="Logo" />
            <h1 className="text-white text-lg md:text-xl font-semibold">HERO.IO</h1>
          </div>

         
          <div className="text-center md:text-left">
            <h1 className="text-white text-lg md:text-2xl mb-2">Social Link</h1>
            <span className="flex justify-center md:justify-start gap-4 md:gap-7 text-white text-xl">
              <FaFacebookSquare />
              <FaLinkedin />
              <FaXTwitter />
            </span>
          </div>
        </div>

      
        <div className="mt-6">
          <h3 className="text-white text-center text-sm md:text-base">
            Copyright © 2025 - All right reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
