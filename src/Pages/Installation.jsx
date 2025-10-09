import React, { useEffect, useState } from 'react';
import { FaArrowCircleDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Installation = () => {
  const [installation, setInstallation] = useState([])
  const [sortOrder, setSortOrder] = useState('none')
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('install Now'))
    if(savedList) setInstallation(savedList)
  }, [])
  
  const sortedItem = (() => {
    if (sortOrder === 'size-asc') {
      return [...installation].sort((a, b) => a.size - b.size)
    } else if (sortOrder === 'size-dese') {
      return [...installation].sort((a, b) => b.size - a.size)
    } else {
     return installation
    }
  })()
  
  const handleRemove = id => {
    const existingList = JSON.parse(localStorage.getItem('install Now'))
    let updatedList = existingList.filter(a => a.id !== id)
    setInstallation(updatedList)
    localStorage.setItem('install Now', JSON.stringify(updatedList))
  }

  return (
    <div>
      
      <div className='text-center'>
          <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
      <p>Explore All Trending Apps on the Market developed by us</p>
    </div>
      <div className='flex justify-between items-center p-5'>
        <h1>App Inattaled : {installation.length}</h1>
        <label className='form-control w-full max-w-xs'>
            <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="none">Sort By Size</option>
          <option value="size-asc">Low-to-High</option>
          <option value="size-desc">High-to-Low</option>
        </select>
      </label>
        {/* <button className='border-1 p-2 rounded-2xl shadow-2xl'>Sort by Size</button> */}
      </div>
      
      <div className='space-y-3'>
        {
          sortedItem.map(a =>  <div key={a.id} className="card card-side bg-base-100 shadow-sm">
     <figure>
    <img
      className="rounded-xl w-[100px] h-[100px] gap-5" src={a.image}
      alt="Movie" />
   </figure>
   <div className="card-body">
              <h2 className="card-title">{a.title}</h2>
              <div className='flex gap-5'>
                 <h3 className='flex items-center gap-2'><FaArrowCircleDown />{a.downloads}</h3>
                      <p className='flex items-center gap-2'><CiStar />{a.ratingAvg}</p>
                      <p className=''>{a.size} MB </p>
   </div>
    <div className="card-actions justify-end">
      <button onClick={()=> handleRemove(a.id)} className="btn btn-primary">Uninstall</button>
    </div>
   </div>
   </div>)
        }
     </div>
      
    </div>
  );
};

export default Installation;