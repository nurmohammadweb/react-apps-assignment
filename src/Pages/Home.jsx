import React from 'react';
import Banner from '../Components/Banner';
import AppCard from './appCard';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';

const Home = () => {
  const { apps, loading, error } = useApps();
  const featureApps = apps.slice(0, 8);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-600 font-semibold text-lg">Loading...</p>
        </div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600 text-lg font-semibold">
          ⚠️ Failed to load apps. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="items-center">
      <Banner />

      <div className="text-center mt-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-10">Trending Apps</h1>
        <p className="mb-8 text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-10">
        {featureApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

     
      <div className="flex justify-center mt-10 mb-16">
        <Link
          to="/apps"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all duration-200"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
