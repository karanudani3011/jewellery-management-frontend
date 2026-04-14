import React, { useState } from 'react';
import { Search, Plus, Filter, Edit, Trash2 } from 'lucide-react';

const OwnerInventory = () => {
  const [inventory] = useState([
    { id: 'INV-001', name: 'Gold Necklace 24k', category: 'Necklace', stock: 12, price: '$1,200', status: 'In Stock' },
    { id: 'INV-002', name: 'Diamond Ring', category: 'Ring', stock: 3, price: '$2,500', status: 'Low Stock' },
    { id: 'INV-003', name: 'Silver Bracelet', category: 'Bracelet', stock: 25, price: '$150', status: 'In Stock' },
    { id: 'INV-004', name: 'Platinum Earrings', category: 'Earrings', stock: 0, price: '$800', status: 'Out of Stock' },
  ]);

  return (
    <div className="inventory-page">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem' }}>Inventory Management</h3>
          <p className="text-muted mt-2">Manage your jewelry items, stock, and pricing.</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={16} /> Add New Item
        </button>
      </div>

      <div className="glass-panel p-6 border-radius-md">
        <div className="flex justify-between items-center mb-6">
          <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', width: '100%', maxWidth: '300px' }}>
            <Search size={16} className="text-muted mr-2" />
            <input type="text" placeholder="Search inventory..." style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', width: '100%' }} />
          </div>
          <button className="btn btn-secondary flex items-center gap-2">
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="table-responsive">
          <table className="w-full text-left">
            <thead>
              <tr className="text-muted border-b border-muted">
                <th className="py-3">Item ID</th>
                <th className="py-3">Name</th>
                <th className="py-3">Category</th>
                <th className="py-3">Stock</th>
                <th className="py-3">Price</th>
                <th className="py-3">Status</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id}>
                  <td className="py-3">{item.id}</td>
                  <td className="py-3" style={{ fontWeight: '500' }}>{item.name}</td>
                  <td className="py-3">{item.category}</td>
                  <td className="py-3">{item.stock}</td>
                  <td className="py-3">{item.price}</td>
                  <td className="py-3">
                    <span className={`badge ${item.status === 'In Stock' ? 'text-success' : item.status === 'Low Stock' ? 'text-warning' : 'text-error'}`} style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }}>
                      {item.status}
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

export default OwnerInventory;
