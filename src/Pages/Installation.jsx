import React, { useEffect, useState } from 'react';
import { FaArrowCircleDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      const savedList = JSON.parse(localStorage.getItem('install Now'));
      if (savedList) setInstallation(savedList);
      setLoading(false);
    }, 700);
  }, []);
  
  const sortedItem = (() => {
    if (sortOrder === 'size-asc') {
      return [...installation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'size-desc') {
      return [...installation].sort((a, b) => b.size - a.size);
    } else {
      return installation;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem('install Now'));
    let updatedList = existingList.filter(a => a.id !== id);
    setInstallation(updatedList);
    localStorage.setItem('install Now', JSON.stringify(updatedList));
    alert('Uninstall Done');
  };

  
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

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-lg font-medium">Apps Installed: {installation.length}</h1>
        <label className="w-full md:w-auto">
          <select
            className="select select-bordered w-full md:w-56"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low-to-High</option>
            <option value="size-desc">High-to-Low</option>
          </select>
        </label>
      </div>

  
      <div className="mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedItem.map((a) => (
          <div key={a.id} className="card bg-base-100 shadow-sm border rounded-xl">
            <div className="flex items-center gap-5 p-4">
              <img
                className="rounded-xl w-[80px] h-[80px] object-cover"
                src={a.image}
                alt={a.title}
              />
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{a.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                  <span className="flex items-center gap-1"><FaArrowCircleDown /> {a.downloads}</span>
                  <span className="flex items-center gap-1"><CiStar /> {a.ratingAvg}</span>
                  <span>{a.size} MB</span>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end px-4 pb-4">
              <button
                onClick={() => handleRemove(a.id)}
                className="btn btn-primary w-full md:w-auto"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {installation.length === 0 && (
        <div className="text-center mt-20 text-gray-500 text-lg">
          You haven’t installed any apps yet.
        </div>
      )}
    </div>
  );
};

export default Installation;
