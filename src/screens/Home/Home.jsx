import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (user) {
          setUsername(JSON.parse(user).username);
        }
        if (!token) {
          navigate('/login');
          return;
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/users/request-delete-account', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('A verification email has been sent to delete your account. Please check your inbox.');
      handleSignOut();
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Failed to request account deletion.');
    }
  };

  return (
    <div>
      <h1>Welcome {username}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      
      <button onClick={() => setShowModal(true)}>Delete Account</button>

      {showModal && (
        <div className="modal">
          <p>Are you sure you want to delete your account?</p>
          <button onClick={handleDeleteAccount}>Yes, delete my account</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Home;