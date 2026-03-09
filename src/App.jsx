import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingPage from './Components/LandingPage';
import AdminPortal from './Components/Admin/AdminPortal';
import UsersPortal from './Components/Users/UsersPortal';

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1000} />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/adminportal/*" element={<AdminPortal />} />

        <Route path="/usersportal/*" element={<UsersPortal />} />
      </Routes>
    </>
  );
};

export default App;