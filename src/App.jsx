import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Home from './screens/Home/Home';
import VerifyEmail from './screens/VerifyEmail/VerifyEmail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/verify-email/:token" element={<VerifyEmail />} />
    </Routes>
  );
};

export default App;