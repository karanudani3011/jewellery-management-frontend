import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import '../Dashboard.css';

const StaffDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="brand-title">Gemsys Staff</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#billing" className="nav-item active">New Bill</a>
          <a href="#estimates" className="nav-item">Estimates</a>
          <a href="#customers" className="nav-item">Customers</a>
        </nav>
        <div className="sidebar-footer">
          <button className="btn btn-secondary w-full" onClick={() => navigate('/login')}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <h3>Point of Sale / Billing</h3>
          <div className="user-profile">Staff User</div>
        </header>
        <div className="content-area">
          <div className="glass-panel p-6 border-radius-md">
            <h4>Create Estimate / Bill</h4>
            <p className="text-muted mt-2">Search items by ID/Name to add to cart.</p>
            {/* Cart and search components will go here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffDashboard;
