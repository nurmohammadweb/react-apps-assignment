import React from 'react';

const LoadingSpinner = ({ count = 8 }) => {
  
  console.log(LoadingSpinner)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex w-52 flex-col gap-4">
   <div className="skeleton h-48 w-full"></div>
   <div className="skeleton h-4 w-28"></div>
   <div className="skeleton h-4 w-full"></div>
   <div className="skeleton h-4 w-full"></div>
    </div>
    ))}
    </div>
  );
};

export default LoadingSpinner;<h1>Hello LoadingSpinner</h1>