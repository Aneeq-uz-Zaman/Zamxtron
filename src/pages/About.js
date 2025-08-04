import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

const About = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/info/about`).then(res => setInfo(res.data));
  }, []);
  return (
    <div className="card max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">About Us</h2>
      {info ? (
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{info.name}</p>
          <p>{info.description}</p>
          <div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Our Vision</h3>
            <p className="italic">{info.vision}</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Our Mission</h3>
            <p className="italic">{info.mission}</p>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default About;
