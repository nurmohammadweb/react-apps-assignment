import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



const ErrorPage = () => {
  const error = useRouteError()
 
  return (  
    <>
    <div className='bg-gray-50'>
       <div className='max-w-[1200px] mx-auto'>
      <Navbar></Navbar>
      <div>{error.message}</div>
    </div>
     <div>
        <Footer></Footer>
     </div>
   </div>
    </>
  
  );
};

export default ErrorPage;