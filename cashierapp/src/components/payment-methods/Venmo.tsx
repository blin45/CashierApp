import React, { useContext } from 'react';
import { PaymentContext } from '../../App';
import './Venmo.css';

const VenmoSection: React.FC = () => {
  const { recipient, note } = useContext(PaymentContext);

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