import React from 'react';
import { FaArrowCircleDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const AllAppCard = ({ app }) => {
  // const [id, image, title, downloads,ratingAvg]
  return (
    <Link to={`/appdetails/${app.id}`}>
      <div  className="card bg-base-100 w-[275px] h-[250px] shadow-2xl ">
        <figure className="px-10 pt-10">
       <img
         src={app.image}
         alt="Shoes"
         className="rounded-xl w-[100px] h-[100px] gap-5" />
       </figure>
       <div className="card-body items-center text-center">
                   <h2 className="card-title">App Name : {app.title}</h2>
       <div className='flex justify-between items-center gap-20'>
         <h3 className='flex items-center gap-2'><FaArrowCircleDown />{app.downloads}</h3>
         <p className='flex items-center gap-2'><CiStar />{app.ratingAvg}</p>
       </div>
       </div>
       </div>
    </Link>
    
  );
};

export default AllAppCard;