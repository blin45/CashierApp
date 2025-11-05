import React, { useState, useContext } from 'react';
import { PaymentContext } from '../../App';
import './CashApp.css';

const CashAppSection: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { recipient } = useContext(PaymentContext);
  const { amount } = useContext(PaymentContext);

  const getCashAppUrl = () => {
    let url = `https://cash.app/$${recipient}?amount=${amount}`;
    return url;
  };

  return (
    <div className="cashapp-section">
      <div className="section-content">
        <div className="warning-container">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="warning-checkbox"
            />
            <span className="warning-text">
              I understand that I must enter my UserID in the Note section of the payment
            </span>
          </label>
        </div>
        
        {isChecked && recipient && (
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cashapp-link"
            href={getCashAppUrl()}
          >
            Open Cash App
          </a>
        )}
        {isChecked && !recipient && (
          <p className="error-message">Please enter a recipient ID above</p>
        )}
      </div>
    </div>
  );
};

export default CashAppSection;