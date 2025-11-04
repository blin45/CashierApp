import React from 'react';
import './Chime.css';

const ChimeSection: React.FC = () => {
  return (
    <div className="chime-section">
      <div className="section-content">
        <h2>Chime Payment Instructions</h2>
        <div className="instructions-container">
          <ol className="instruction-list">
            <li>Open your Chime mobile app</li>
            <li>Tap the "Pay" icon at the bottom of the screen</li>
            <li>Select "Pay Friends"</li>
            <li>Choose one of the following methods:
              <ul>
                <li>Enter recipient's phone number</li>
                <li>Enter recipient's email address</li>
                <li>Search for recipient's $ChimeSign if they have one</li>
              </ul>
            </li>
            <li>Enter the payment amount</li>
            <li>Add a note for the payment (recommended)</li>
            <li>Tap "Pay" to complete the transaction</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ChimeSection;