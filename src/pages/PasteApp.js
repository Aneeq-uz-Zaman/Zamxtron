import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

const PasteApp = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;
    // Fetch user profile
    axios.get(`${API_BASE_URL}/api/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setUser(res.data.user)).catch(() => setUser(null));
    // Fetch notes
    axios.get(`${API_BASE_URL}/api/notes`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setNotes(res.data));
  }, [token]);

  const addNote = async (e) => {
    e.preventDefault();
    setError('');
    if (!content.trim()) return setError('Note content required');
    try {
      const res = await axios.post(`${API_BASE_URL}/api/notes`, { content }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes([res.data, ...notes]);
      setContent('');
    } catch (err) {
      setError('Failed to add note');
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(notes.filter(n => n._id !== id));
    } catch {
      setError('Failed to delete note');
    }
  };

  if (!token) {
    return (
      <div className="card max-w-md mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">PasteApp</h2>
        <p className="text-gray-600 dark:text-gray-300">You must be logged in to use the PasteApp.</p>
      </div>
    );
  }

  return (
    <div className="card max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">PasteApp</h2>
      {user && (
        <div className="mb-6 text-left bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <p className="font-bold text-lg text-gray-900 dark:text-white">User: {user.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Email: {user.email}</p>
        </div>
      )}
      <form onSubmit={addNote} className="flex gap-2 mb-6">
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Paste your content here..."
          className="input-field flex-1"
        />
        <button type="submit" className="btn-primary">Add</button>
      </form>
      {error && <div className="text-red-500 dark:text-red-400 text-sm font-bold text-center mb-4">{error}</div>}
      <ul className="space-y-4">
        {notes.map(note => (
          <li key={note._id} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex justify-between items-center shadow-sm">
            <span className="text-gray-800 dark:text-gray-200">{note.content}</span>
            <button onClick={() => deleteNote(note._id)} className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg text-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasteApp;
