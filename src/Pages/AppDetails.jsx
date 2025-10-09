import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';


const AppDetails = () => {
  const {id} = useParams()
  const { apps, loading, error } = useApps()
  const app = apps.find(a => String(a.id) === id)
  console.log(app);
  if (loading) return <p>Loading .....</p>
  
  return (
    <div className='bg-gray-100 max-w-full'>
      <div className='flex justify-center items-center gap-10'>
        <img className='bg-white p-4 rounded-2xl shadow-2xl' src={app.image} alt="" />
        <div>
          <h1>App Name : {app.title}</h1>
          <p>Developed by : {app.companyName}</p>
           <div className='p-10 rounded-2xl w-full'>
        <div>
          <div className='grid grid-cols-3 gap-10'>
            <div className=' text-center'>
              <p>Total Downloads</p>
              <h1 className='text-4xl font-bold'>29.6M</h1>
        
            </div>
            <div className=' text-center'>
              <p>Total Reviews</p>
              <h1 className='text-4xl font-bold'>906K</h1>
           
            </div>
            <div className=' text-center'>
              <p>Active Apps</p>
              <h1 className='text-4xl font-bold'>132+</h1>
             
            </div>
           
          </div>
       </div>
      </div>
          <button className='border-2 p-2 rounded-2xl shadow-2xl bg text-2xl font-bold text-white bg-blue-500 mx-2'>Install Now<span className='m-2'>({app.size}MB)</span></button>
        </div>
      </div>

      <div className='rating'>

      </div>
      <div className='descrption'>
        <p className='text-2xl'>
         <span className='text-3xl font-bold'>App Description :</span> {app.description}
        </p>

      </div>
   </div>
  );
};

export default AppDetails;