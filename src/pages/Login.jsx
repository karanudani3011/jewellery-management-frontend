import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Diamond, ShieldCheck, User, LayoutDashboard } from 'lucide-react';
import '../Login.css';

const Login = () => {
  const [role, setRole] = useState('Staff'); /* Staff, Owner, Master */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (username === 'admin' && password === '123') {
      if (role === 'Staff') navigate('/staff');
      else if (role === 'Owner') navigate('/owner');
      else if (role === 'Master') navigate('/master');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card glass-panel">
        <div className="login-header">
          <div className="logo-icon">
            <Diamond size={40} color="var(--primary)" />
          </div>
          <h1>Gemsys</h1>
          <p>Jewellery Management System</p>
        </div>

        <div className="role-selector">
          <button 
            className={`role-btn ${role === 'Staff' ? 'active' : ''}`}
            onClick={() => setRole('Staff')}
            type="button"
          >
            <User size={18} /> Staff
          </button>
          <button 
            className={`role-btn ${role === 'Owner' ? 'active' : ''}`}
            onClick={() => setRole('Owner')}
            type="button"
          >
            <LayoutDashboard size={18} /> Owner
          </button>
          <button 
            className={`role-btn ${role === 'Master' ? 'active' : ''}`}
            onClick={() => setRole('Master')}
            type="button"
          >
            <ShieldCheck size={18} /> Master Admin
          </button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {error && <div style={{ color: 'var(--danger)', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}
          <div className="form-group">
            <label className="form-label">Username</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Enter username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary login-submit-btn">
            Sign In to {role} Panel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
