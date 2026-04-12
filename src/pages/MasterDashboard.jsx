import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Key, Briefcase, Plus, X } from 'lucide-react';
import '../Dashboard.css';

const MasterDashboard = () => {
  const navigate = useNavigate();
  const [showAddClient, setShowAddClient] = useState(false);

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="brand-title">Gemsys Master</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#clients" className="nav-item active"><Briefcase size={18} /> Clients</a>
          <a href="#licenses" className="nav-item"><Key size={18} /> Licenses</a>
        </nav>
        <div className="sidebar-footer">
          <button className="btn btn-secondary w-full" onClick={() => navigate('/login')}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <h3>Master Administrator</h3>
          <div className="user-profile">Super Admin</div>
        </header>
        <div className="content-area">
          <div className="glass-panel p-6 border-radius-md">
            <div className="flex justify-between items-center">
              <h4>Client Management</h4>
              <button className="btn btn-primary" onClick={() => setShowAddClient(true)}>
                <Plus size={16} /> Add Client
              </button>
            </div>
            
            <div className="table-responsive mt-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-muted">
                    <th className="py-2">Shop Name</th>
                    <th className="py-2">Owner</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">License Expiry</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">Diamond Haven</td>
                    <td className="py-2">Alice Smith</td>
                    <td className="py-2"><span className="text-success">Active</span></td>
                    <td className="py-2">2026-12-31</td>
                    <td className="py-2">
                       <button className="btn btn-secondary">Manage</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Add Client Modal */}
      {showAddClient && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <div className="flex justify-between items-center mb-6">
              <h4>Add New Client</h4>
              <button className="btn-icon" onClick={() => setShowAddClient(false)}><X size={20} /></button>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddClient(false); }}>
              <div className="form-group">
                <label className="form-label">Shop Name</label>
                <input type="text" className="form-input w-full" placeholder="Enter shop name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Owner Name</label>
                <input type="text" className="form-input w-full" placeholder="Enter owner name" required />
              </div>
              <div className="form-group">
                <label className="form-label">License Expiry</label>
                <input type="date" className="form-input w-full" required />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddClient(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Client</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterDashboard;
