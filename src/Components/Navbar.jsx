import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logoImg from '../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";



const Navbar = () => {
  const links = <>
    <NavLink className={({ isActive }) => `flex items-center mx-4 font-medium ${isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : ""}`} to="/"> <FaHome /><li className='m-2'>Home</li></NavLink>
    
    <NavLink className={({ isActive }) => `flex items-center mx-4 font-medium ${isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : ""}`} to="/apps"><FaAppStore /><li className='m-2'>Apps</li></NavLink>
    
    <NavLink className={({ isActive }) => `flex items-center mx-4 font-medium ${isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : ""}`}  to="/installation"><MdInstallDesktop />
<li className='m-2'>Installation</li></NavLink> 
  </>
   
  return (
   <div className="navbar mb-5 w-full bg-white p-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}  
      </ul>
    </div>
        <div className='flex'>
          <Link to="/"><img className='w-[35px] h-[35px]' src={logoImg} alt="logo" /></Link>
          <Link to="/"><h3 className="text-xl font-semibold text-[#632EE3]">HERO.IO</h3></Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a  className="btn bg-[#632EE3] text-white hover:underline"  href="https://github.com/nurmohammadweb"><FaGithub />
          Contribute</a>
  
  </div>
</div>
  );
};

export default Navbar;