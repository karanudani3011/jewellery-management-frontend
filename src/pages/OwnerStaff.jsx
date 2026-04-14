import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, Shield, X } from 'lucide-react';

const defaultStaff = [
  { id: 'EMP-001', name: 'John Doe', role: 'Sales Rep', email: 'john@gemsys.com', phone: '+1 234-567-8901', status: 'Active' },
  { id: 'EMP-002', name: 'Jane Smith', role: 'Manager', email: 'jane@gemsys.com', phone: '+1 234-567-8902', status: 'Active' },
  { id: 'EMP-003', name: 'Mike Johnson', role: 'Appraiser', email: 'mike@gemsys.com', phone: '+1 234-567-8903', status: 'On Leave' },
];

const OwnerStaff = () => {
  const [staff, setStaff] = useState(() => {
    const saved = localStorage.getItem('owner_staff');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultStaff;
      }
    }
    return defaultStaff;
  });

  useEffect(() => {
    localStorage.setItem('owner_staff', JSON.stringify(staff));
  }, [staff]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({ name: '', role: 'Sales Rep', email: '', phone: '', status: 'Active' });

  const handleAddStaff = (e) => {
    e.preventDefault();
    const newId = `EMP-00${staff.length + 1}`;
    setStaff([...staff, { ...newStaff, id: newId }]);
    setIsModalOpen(false);
    setNewStaff({ name: '', role: 'Sales Rep', email: '', phone: '', status: 'Active' });
  };

  const deleteStaff = (id) => {
    setStaff(staff.filter(emp => emp.id !== id));
  };

  return (
    <div className="staff-page">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem' }}>Staff Management</h3>
          <p className="text-muted mt-2">Manage employee accounts, roles, and access.</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
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
                    <button className="text-muted hover:text-primary transition" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Edit size={16} /></button>
                    <button className="text-muted hover:text-error transition" onClick={() => deleteStaff(employee.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {staff.length === 0 && <p className="text-muted text-center py-4">No staff members found.</p>}
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-panel p-6 border-radius-md" style={{ width: '400px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Add Staff Member</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <form onSubmit={handleAddStaff} className="space-y-4">
              <div className="mb-4">
                <label className="text-sm text-muted mb-1 block">Full Name</label>
                <input type="text" required value={newStaff.name} onChange={e => setNewStaff({...newStaff, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} placeholder="e.g. Alice Smith" />
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted mb-1 block">Email</label>
                <input type="email" required value={newStaff.email} onChange={e => setNewStaff({...newStaff, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} placeholder="alice@gemsys.com" />
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted mb-1 block">Phone</label>
                <input type="text" required value={newStaff.phone} onChange={e => setNewStaff({...newStaff, phone: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} placeholder="+1 234-567-8900" />
              </div>
              <div className="flex gap-3 mb-4">
                <div style={{ flex: 1 }}>
                  <label className="text-sm text-muted mb-1 block">Role</label>
                  <select value={newStaff.role} onChange={e => setNewStaff({...newStaff, role: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }}>
                    <option style={{color: '#000'}} value="Manager">Manager</option>
                    <option style={{color: '#000'}} value="Sales Rep">Sales Rep</option>
                    <option style={{color: '#000'}} value="Appraiser">Appraiser</option>
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label className="text-sm text-muted mb-1 block">Status</label>
                  <select value={newStaff.status} onChange={e => setNewStaff({...newStaff, status: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }}>
                    <option style={{color: '#000'}} value="Active">Active</option>
                    <option style={{color: '#000'}} value="On Leave">On Leave</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Add Member</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerStaff;
