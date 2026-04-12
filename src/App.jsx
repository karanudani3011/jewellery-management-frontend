import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import StaffDashboard from './pages/StaffDashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import MasterDashboard from './pages/MasterDashboard';
import Setup from './pages/Setup';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/staff/*" element={<StaffDashboard />} />
        <Route path="/owner/*" element={<OwnerDashboard />} />
        <Route path="/master/*" element={<MasterDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
