import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Diamond } from 'lucide-react';
import '../Login.css'; // Reusing login container styles

const Setup = () => {
  const navigate = useNavigate();

  const handleSetup = (e) => {
    e.preventDefault();
    // Simulate setup and route to login
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-card glass-panel" style={{ maxWidth: '500px' }}>
        <div className="login-header">
          <div className="logo-icon">
            <Diamond size={40} color="var(--primary)" />
          </div>
          <h1>System Setup</h1>
          <p>Initialize your Jewellery Management Software</p>
        </div>

        <form onSubmit={handleSetup} className="login-form">
          <div className="form-group">
            <label className="form-label">Shop Name</label>
            <input type="text" className="form-input" placeholder="e.g. Royal Diamonds" required />
          </div>
          <div className="form-group">
            <label className="form-label">Owner Name</label>
            <input type="text" className="form-input" placeholder="Owner's full name" required />
          </div>
          <div className="form-group">
            <label className="form-label">Contact / Phone</label>
            <input type="tel" className="form-input" placeholder="Phone number" required />
          </div>
          <div className="form-group">
            <label className="form-label">GST Number (Optional)</label>
            <input type="text" className="form-input" placeholder="GSTIN" />
          </div>
          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label className="form-label">License Key</label>
            <input type="text" className="form-input" placeholder="XXXX-XXXX-XXXX-XXXX" required 
              style={{ border: '1px solid var(--primary)', background: 'rgba(212, 175, 55, 0.05)' }}/>
          </div>
          
          <button type="submit" className="btn btn-primary login-submit-btn">
            Activate & Complete Setup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setup;
