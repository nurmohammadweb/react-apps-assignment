import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import useApps from '../Hooks/useApps';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { apps, loading, error } = useApps();
  const [installed, setInstalled] = useState(false);
  const [localLoading, setLocalLoading] = useState(true);

  const app = apps.find(a => String(a.id) === id);

 
  useEffect(() => {
    if (!loading && (error || !app)) {
      navigate('/appnotfound');
    }
  }, [loading, error, app, navigate]);

  useEffect(() => {
    if (app) {
      const existingList = JSON.parse(localStorage.getItem('install Now')) || [];
      const isAlreadyInstalled = existingList.some(a => a.id === app?.id);
      setInstalled(isAlreadyInstalled);
    }
  }, [app]);

  useEffect(() => {
   
    const timer = setTimeout(() => setLocalLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading || localLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-600 font-semibold text-lg">Loading...</p>
        </div>
      </div>
    );

  if (!app || error) return null; 

  const handleAddToAppDetails = () => {
    const existingList = JSON.parse(localStorage.getItem('install Now'));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some(a => a.id === app.id);
      if (isDuplicate) return alert('Already Installed');
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem('install Now', JSON.stringify(updatedList));
    setInstalled(true);
  };

  const formatNumber = num => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  return (
    <div className="bg-gray-100 max-w-full px-4 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <img
          className="bg-white p-4 rounded-2xl w-full max-w-[400px] md:max-w-[500px] h-auto shadow-2xl"
          src={app.image}
          alt={app.title}
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">App Name: {app.title}</h1>
          <p className="text-gray-600 mb-4">Developed by: {app.companyName}</p>

          <div className="p-6 md:p-10 rounded-2xl w-full bg-white shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p>Total Downloads</p>
                <h1 className="text-3xl md:text-4xl font-bold">{formatNumber(app.downloads)}</h1>
              </div>
              <div>
                <p>Total Reviews</p>
                <h1 className="text-3xl md:text-4xl font-bold">{formatNumber(app.reviews)}</h1>
              </div>
              <div>
                <p>Active Apps</p>
                <h1 className="text-3xl md:text-4xl font-bold">30+</h1>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (installed) alert('Already Installed');
              else handleAddToAppDetails();
            }}
            className={`border-2 p-2 rounded-2xl shadow-2xl text-2xl font-bold text-white w-full md:w-auto ${
              installed ? 'bg-green-500' : 'bg-blue-500'
            }`}
          >
            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Ratings</h1>
        <div className="bg-white border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={app.ratings}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#ff8c00" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="descrption text-lg md:text-xl">
        <p>
          <span className="text-2xl md:text-3xl font-bold">App Description:</span> {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
