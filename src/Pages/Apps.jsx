import React from 'react';
import useApps from '../Hooks/useApps';
import AllAppCard from './AllAppCard';

const Apps = () => {
  const { apps } = useApps()
  console.log(apps);
  const allAppData = apps.slice(0, 20)
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our All Applications</h1>
        <p className='mb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex justify-between items-center mb-7'>
        <h3>({apps.length}) Apps Found</h3>
        <search></search>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
      </div>

      <div className='grid grid-cols-4 gap-5'>
     {
        allAppData.map(app => 
          <AllAppCard app={app}></AllAppCard>
        )   
     }
  </div>

    </div>
  );
};

export default Apps;