import React from 'react';
import './ApplePay.css';

const ApplePaySection: React.FC = () => {
  return (
    <div className="applepay-section">
      <div className="section-content">
        <h4>Follow the instructions on setting up Apple Cash</h4>
          <h3>How to Send Money with Apple Pay</h3>
          <ol>
            <li>Open the Messages app on your iPhone.</li>
            <li>Start a new conversation or open an existing one with the recipient below</li>
            <li>Tap the <strong>Apple Cash</strong> button (or <strong>+</strong> and select Apple Cash).</li>
            <li>Enter the amount you want to send.</li>
            <li>Tap <strong>Pay</strong>, then tap <strong>Send</strong>.</li>
            <li>Authenticate with Face ID, Touch ID, or your passcode to confirm.</li>
            <li>Done! The money will be sent instantly.</li>
          </ol>
          <div className="recipient-slot">
            <label htmlFor="apple-pay-phone">Recipient Phone Number (TBD):</label>
          </div>
        </div>
    </div>
  );
};

export default ApplePaySection;