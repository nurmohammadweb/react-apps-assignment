import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='bg-gray-50'>
       <div className=''>
     <div> <Navbar></Navbar></div>
        <div className='max-w-[1200px] mx-auto'>
          <Outlet></Outlet>
      </div>
    </div>
     <div>
        <Footer></Footer>
     </div>
   </div>
  );
};

export default MainLayout;