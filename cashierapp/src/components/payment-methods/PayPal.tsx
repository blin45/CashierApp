import React, { useState, useContext } from 'react';
import { PaymentContext } from '../../App';
import './PayPal.css';

const PayPalSection: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { recipient, note } = useContext(PaymentContext);
  const { amount } = useContext(PaymentContext);

  const getPayPalUrl = () => {
    let url = `https://paypal.me/${recipient}/${amount}`;
    return url;
  };

  return (
    <div className="paypal-section">
      <div className="section-content">
        <h2>PayPal Payment Details</h2>
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
            className="paypal-link"
            href={getPayPalUrl()}
          >
            Open PayPal
          </a>
        )}
        {isChecked && !recipient && (
          <p className="error-message">Please enter a recipient ID above</p>
        )}
      </div>
    </div>
  );
};

export default PayPalSection;