import React, { useState, useEffect } from 'react';
import { Search, Plus, Filter, Edit, Trash2, X } from 'lucide-react';

const defaultInventory = [
  { id: 'INV-001', name: 'Gold Necklace 24k', category: 'Necklace', stock: 12, price: '$1,200', status: 'In Stock' },
  { id: 'INV-002', name: 'Diamond Ring', category: 'Ring', stock: 3, price: '$2,500', status: 'Low Stock' },
  { id: 'INV-003', name: 'Silver Bracelet', category: 'Bracelet', stock: 25, price: '$150', status: 'In Stock' },
  { id: 'INV-004', name: 'Platinum Earrings', category: 'Earrings', stock: 0, price: '$800', status: 'Out of Stock' },
];

const OwnerInventory = () => {
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem('owner_inventory');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultInventory;
      }
    }
    return defaultInventory;
  });

  useEffect(() => {
    localStorage.setItem('owner_inventory', JSON.stringify(inventory));
  }, [inventory]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', category: '', stock: '', price: '', status: 'In Stock' });

  const handleAddItem = (e) => {
    e.preventDefault();
    const newId = `INV-00${inventory.length + 1}`;
    setInventory([...inventory, { ...newItem, id: newId }]);
    setIsModalOpen(false);
    setNewItem({ name: '', category: '', stock: '', price: '', status: 'In Stock' });
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <div className="inventory-page">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem' }}>Inventory Management</h3>
          <p className="text-muted mt-2">Manage your jewelry items, stock, and pricing.</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
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
                    <button className="text-muted hover:text-primary transition" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Edit size={16} /></button>
                    <button className="text-muted hover:text-error transition" onClick={() => deleteItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {inventory.length === 0 && <p className="text-muted text-center py-4">No items in stock.</p>}
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-panel p-6 border-radius-md" style={{ width: '400px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Add New Item</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <form onSubmit={handleAddItem} className="space-y-4">
              <div className="mb-4">
                <label className="text-sm text-muted mb-1 block">Item Name</label>
                <input type="text" required value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} placeholder="e.g. Gold Ring" />
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted mb-1 block">Category</label>
                <input type="text" required value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} placeholder="e.g. Ring" />
              </div>
              <div className="flex gap-3 mb-4">
                <div style={{ flex: 1 }}>
                  <label className="text-sm text-muted mb-1 block">Stock</label>
                  <input type="number" required value={newItem.stock} onChange={e => setNewItem({...newItem, stock: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} placeholder="0" />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="text-sm text-muted mb-1 block">Price</label>
                  <input type="text" required value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} placeholder="e.g. $500" />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-sm text-muted mb-1 block">Status</label>
                <select value={newItem.status} onChange={e => setNewItem({...newItem, status: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }}>
                  <option style={{color: '#000'}} value="In Stock">In Stock</option>
                  <option style={{color: '#000'}} value="Low Stock">Low Stock</option>
                  <option style={{color: '#000'}} value="Out of Stock">Out of Stock</option>
                </select>
              </div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Save Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerInventory;
