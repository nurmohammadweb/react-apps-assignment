import React from 'react';
import Banner from '../Components/Banner';
// import { useLoaderData } from 'react-router';
import AppCard from './appCard';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';

const Home = () => {
  // const apps = useLoaderData()
  // console.log(apps);
  const {apps, loading, error} = useApps()
  const featureApps = apps.slice(0, 8)

  return (
    <div className='items-center'>
      <Banner></Banner>
      <div>
        <div className='text-center mt-4'>
          <h1 className='text-4xl font-bold mt-10'>Trending Apps</h1>
          <p className='mb-5'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className='grid grid-cols-4 gap-5'>
      {
          featureApps.map(app => (
            
         <AppCard key={app.id} app={app}></AppCard>
           
        ))
      }
      </div>
      </div>

      <div className='mt-6 items-center'>
      <Link to="/apps" className="btn btn-success">Show All</Link>
     </div>
     
    </div>
  );
};

export default Home;