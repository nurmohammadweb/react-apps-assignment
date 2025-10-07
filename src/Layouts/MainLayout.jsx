import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
       <div className='max-w-[1200px] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
     <div>
        <Footer></Footer>
     </div>
   </div>
  );
};

export default MainLayout;<h1>Hello MainLayout</h1>