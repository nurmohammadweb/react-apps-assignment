import React, { useState, useEffect } from 'react';
import useApps from '../Hooks/useApps';
import AllAppCard from './AllAppCard';
import addFound from '../assets/App-Error.png';

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const term = search.trim().toLowerCase();
  const searchedApps = term ? apps.filter(app => app.title.toLowerCase().includes(term)) : apps;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-purple-600 font-semibold text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
     
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Our All Applications</h1>
        <p className="text-gray-600 text-sm md:text-base mb-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-7">
        <h3>Apps Found ({searchedApps.length})</h3>
        <label className="input flex items-center w-full md:w-64 border border-gray-300 rounded overflow-hidden">
          <svg className="h-5 w-5 opacity-50 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
            className="w-full px-2 py-1 outline-none"
          />
        </label>
      </div>

      
      {searchedApps.length === 0 ? (
        <div className="text-center py-10">
          <img className="w-64 mx-auto" src={addFound} alt="Not Found" />
          <h2 className="text-2xl font-bold mt-4">OPPS!! APP NOT FOUND</h2>
          <p className="text-gray-500">The App you are searching is not available. Please try another one.</p>
          <button
            onClick={() => setSearch('')}
            className="mt-3 px-5 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {searchedApps.map(app => (
            <AllAppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
