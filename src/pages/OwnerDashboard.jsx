import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Package, Users, BarChart3, Settings } from 'lucide-react';
import '../Dashboard.css';

const OwnerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="brand-title">Gemsys Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#overview" className="nav-item active"><LayoutDashboard size={18} /> Overview</a>
          <a href="#inventory" className="nav-item"><Package size={18} /> Inventory</a>
          <a href="#staff" className="nav-item"><Users size={18} /> Staff Management</a>
          <a href="#reports" className="nav-item"><BarChart3 size={18} /> Reports</a>
          <a href="#settings" className="nav-item"><Settings size={18} /> Settings</a>
        </nav>
        <div className="sidebar-footer">
          <button className="btn btn-secondary w-full" onClick={() => navigate('/login')}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <h3>Owner Dashboard</h3>
          <div className="user-profile">Owner User</div>
        </header>
        <div className="content-area">
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
        </div>
      </main>
    </div>
  );
};

export default OwnerDashboard;
