import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Home from './screens/Home/Home';
import VerifyEmail from './screens/VerifyEmail/VerifyEmail';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
//import TopNavBar from './screens/components/TopNavBar'; // Import TopNavBar component

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;