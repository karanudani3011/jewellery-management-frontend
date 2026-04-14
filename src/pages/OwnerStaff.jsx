import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Shield } from 'lucide-react';

const OwnerStaff = () => {
  const [staff] = useState([
    { id: 'EMP-001', name: 'John Doe', role: 'Sales Rep', email: 'john@gemsys.com', phone: '+1 234-567-8901', status: 'Active' },
    { id: 'EMP-002', name: 'Jane Smith', role: 'Manager', email: 'jane@gemsys.com', phone: '+1 234-567-8902', status: 'Active' },
    { id: 'EMP-003', name: 'Mike Johnson', role: 'Appraiser', email: 'mike@gemsys.com', phone: '+1 234-567-8903', status: 'On Leave' },
  ]);

  return (
    <div className="staff-page">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem' }}>Staff Management</h3>
          <p className="text-muted mt-2">Manage employee accounts, roles, and access.</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={16} /> Add Staff Member
        </button>
      </div>

      <div className="glass-panel p-6 border-radius-md">
        <div className="flex justify-between items-center mb-6">
          <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', width: '100%', maxWidth: '300px' }}>
            <Search size={16} className="text-muted mr-2" />
            <input type="text" placeholder="Search staff..." style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', width: '100%' }} />
          </div>
        </div>

        <div className="table-responsive">
          <table className="w-full text-left">
            <thead>
              <tr className="text-muted border-b border-muted">
                <th className="py-3">Emp ID</th>
                <th className="py-3">Name</th>
                <th className="py-3">Role</th>
                <th className="py-3">Email</th>
                <th className="py-3">Phone</th>
                <th className="py-3">Status</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map(employee => (
                <tr key={employee.id}>
                  <td className="py-3">{employee.id}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', flexShrink: 0 }}>
                        {employee.name.charAt(0)}
                      </div>
                      <span style={{ fontWeight: '500' }}>{employee.name}</span>
                    </div>
                  </td>
                  <td className="py-3 flex items-center gap-2" style={{ paddingTop: '0.95rem' }}><Shield size={14} className="text-primary"/> {employee.role}</td>
                  <td className="py-3">{employee.email}</td>
                  <td className="py-3">{employee.phone}</td>
                  <td className="py-3">
                    <span className={`badge ${employee.status === 'Active' ? 'text-success' : 'text-warning'}`} style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="py-3 flex gap-3">
                    <button className="text-muted" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Edit size={16} /></button>
                    <button className="text-muted" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerStaff;
