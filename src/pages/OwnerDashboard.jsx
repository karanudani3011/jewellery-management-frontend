import React from 'react';
import { useNavigate, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { LogOut, LayoutDashboard, Package, Users, BarChart3, Settings } from 'lucide-react';
import '../Dashboard.css';
import OwnerInventory from './OwnerInventory';
import OwnerStaff from './OwnerStaff';

const OwnerOverview = () => (
  <>
    <div className="stats-grid">
      <div className="stat-card glass-panel">
        <h5>Today's Sales</h5>
        <div className="stat-value text-primary">$12,450</div>
      </div>
      <div className="stat-card glass-panel">
        <h5>Low Stock Items</h5>
        <div className="stat-value text-warning">8</div>
      </div>
      <div className="stat-card glass-panel">
        <h5>Active Staff</h5>
        <div className="stat-value text-success">3</div>
      </div>
    </div>
    
    <div className="glass-panel p-6 border-radius-md mt-6">
      <h4>Recent Activity</h4>
      <div className="table-responsive mt-4">
        <table className="w-full text-left">
          <thead>
            <tr className="text-muted border-b border-muted">
              <th className="py-2">Time</th>
              <th className="py-2">Action</th>
              <th className="py-2">Staff</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">10:45 AM</td>
              <td className="py-2">Sale #1002</td>
              <td className="py-2">John Doe</td>
              <td className="py-2">$450.00</td>
            </tr>
            <tr>
              <td className="py-2">09:15 AM</td>
              <td className="py-2">Stock Added</td>
              <td className="py-2">Owner</td>
              <td className="py-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
);

const OwnerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes('/inventory')) return 'Inventory Management';
    if (location.pathname.includes('/staff')) return 'Staff Management';
    if (location.pathname.includes('/reports')) return 'Reports';
    if (location.pathname.includes('/settings')) return 'Settings';
    return 'Owner Dashboard';
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="brand-title">Gemsys Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/owner" end className={({isActive}) => isActive ? "nav-item active" : "nav-item"} style={{ textDecoration: 'none' }}>
            <LayoutDashboard size={18} /> Overview
          </NavLink>
          <NavLink to="/owner/inventory" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} style={{ textDecoration: 'none' }}>
            <Package size={18} /> Inventory
          </NavLink>
          <NavLink to="/owner/staff" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} style={{ textDecoration: 'none' }}>
            <Users size={18} /> Staff Management
          </NavLink>
          <NavLink to="/owner/reports" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} style={{ textDecoration: 'none' }}>
            <BarChart3 size={18} /> Reports
          </NavLink>
          <NavLink to="/owner/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} style={{ textDecoration: 'none' }}>
            <Settings size={18} /> Settings
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <button className="btn btn-secondary w-full" onClick={() => navigate('/login')}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <h3>{getPageTitle()}</h3>
          <div className="user-profile">Owner User</div>
        </header>
        <div className="content-area">
          <Routes>
            <Route path="/" element={<OwnerOverview />} />
            <Route path="/inventory" element={<OwnerInventory />} />
            <Route path="/staff" element={<OwnerStaff />} />
            <Route path="*" element={<h4 className="text-muted mt-4">Page under development...</h4>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default OwnerDashboard;
