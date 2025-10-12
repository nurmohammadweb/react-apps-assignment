import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';
import errorImg from '../assets/error-404.png';

const ErrorPage = () => {
  const { error } = useApps();
  console.log(error);

  return (  
    <>
      <div className='bg-gray-50 min-h-screen flex flex-col'>
       
        <div className='max-w-[1200px] mx-auto'>
          <Navbar />
        </div>
        
      
        <div className='text-center flex-grow py-10 px-4'>
          <h1 className="text-3xl font-bold text-red-500 mb-2">Something went wrong!</h1>
          <p className='text-gray-600 mb-4'>
            {error ? error.message : 'Please try again later.'}
          </p>

          {error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto mb-6'>
               {error.message || 'Unknown error occurred!'}
            </div>
          )}

          <img className='mx-auto w-72 mb-6' src={errorImg} alt="error" />

     
          <Link 
            to="/" 
            className='inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200'
          >
             Back to Home
          </Link>
        </div>

    
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
