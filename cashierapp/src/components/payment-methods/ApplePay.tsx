import React from 'react';
import './ApplePay.css';

const ApplePaySection: React.FC = () => {
  return (
    <div className="applepay-section">
      <div className="section-content">
        <h4>Follow the link for instructions on setting up Apple Cash</h4>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          className="applepay-link"
          href="https://support.apple.com/en-us/HT207886"
        >
          Open Apple Pay
        </a>
      </div>
    </div>
  );
};

export default ApplePaySection;