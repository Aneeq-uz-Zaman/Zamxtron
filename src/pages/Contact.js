import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

const Contact = () => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/info/contact`).then(res => setContact(res.data));
  }, []);
  return (
    <div className="card max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Contact Us</h2>
      {contact ? (
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p><span className="font-bold text-gray-900 dark:text-white">Email:</span> <a href={`mailto:${contact.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{contact.email}</a></p>
          <p><span className="font-bold text-gray-900 dark:text-white">Phone:</span> {contact.phone}</p>
          <p><span className="font-bold text-gray-900 dark:text-white">Location:</span> {contact.location}</p>
          <p><span className="font-bold text-gray-900 dark:text-white">Instagram:</span> <a href={`https://www.instagram.com/zamxtron/#`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{contact.instagram}</a></p>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default Contact;
