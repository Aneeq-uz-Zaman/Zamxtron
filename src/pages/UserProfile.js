import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    axios.get('http://localhost:5001/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setUser(res.data.user)).catch(() => setUser(null));
  }, []);

  if (!user) {
    return (
      <div className="card max-w-md mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">User Profile</h2>
        <p className="text-gray-600 dark:text-gray-300">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="card max-w-md mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">User Profile</h2>
      <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
        <p><span className="font-bold text-gray-900 dark:text-white">Name:</span> {user.name}</p>
        <p><span className="font-bold text-gray-900 dark:text-white">Email:</span> {user.email}</p>
        <p><span className="font-bold text-gray-900 dark:text-white">Account Created:</span> {new Date(user.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default UserProfile;
