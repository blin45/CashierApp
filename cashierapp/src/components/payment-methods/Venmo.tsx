import React, { useContext } from 'react';
import { PaymentContext } from '../../App';
import './Venmo.css';

const VenmoSection: React.FC = () => {
  const { recipient, note, amount, setNote } = useContext(PaymentContext);

  const getVenmoUrl = () => {
    let url = `https://venmo.com/${recipient}?note=${encodeURIComponent(note)}&amount=${amount}`;
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
        {note && note.trim() ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="venmo-link"
            href={getVenmoUrl()}
          >
            Open Venmo
          </a>
        ) : (
          <p className="error-message">Please enter a User ID above</p>
        )}
      </div>
    </div>
  );
}

export default VenmoSection;