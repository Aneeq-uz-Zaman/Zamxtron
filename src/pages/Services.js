import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

const Services = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/info/services`).then(res => setServices(res.data));
  }, []);
  return (
    <div className="card max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Our Services</h2>
      {services ? (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Offerings</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {services.services.map(s => (
                <li key={s} className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 font-semibold text-gray-800 dark:text-gray-200 shadow-sm">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Details</h3>
            <div className="space-y-6">
              {Object.entries(services.details).map(([cat, items]) => (
                <div key={cat}>
                  <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-2">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default Services;
