import React, { useContext } from 'react';
import { PaymentContext } from '../../App';
import './Venmo.css';

const VenmoSection: React.FC = () => {
  const { recipient, note, setNote } = useContext(PaymentContext);

  const getVenmoUrl = () => {
    let url = `https://venmo.com/${recipient}`;
    if (note) {
      url += `?note=${encodeURIComponent(note)}`;
    }
    return url;
  };

  return (
    <div className="venmo-section">
      <div className="section-content">
        <h2>Venmo Payment Details</h2>
        <div className="input-group">
          <label htmlFor="note">User ID:</label>
          <input
            type="text"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter User ID"
          />
        </div>
        {recipient ? (
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="venmo-link"
            href={getVenmoUrl()}
          >
            Open Venmo
          </a>
        ) : (
          <p className="error-message">Please enter a recipient ID above</p>
        )}
      </div>
    </div>
  );
}

export default VenmoSection;