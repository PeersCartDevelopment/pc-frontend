import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Import the CSS file

const Home = () => {
  const [username, setUsername] = useState('');
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
    // Clear stored authentication data
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Welcome {username}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;