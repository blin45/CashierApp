import { useState, lazy, Suspense, createContext } from 'react'
import './App.css'

// Create context for payment details
export const PaymentContext = createContext({
  recipient: '',
  note: '',
  setRecipient: (recipient: string) => {},
  setNote: (note: string) => {}
});

// Lazy load all payment method components
const PayPalSection = lazy(() => import('./components/payment-methods/PayPal'));
const CashAppSection = lazy(() => import('./components/payment-methods/CashApp'));
const ChimeSection = lazy(() => import('./components/payment-methods/Chime'));
const VenmoSection = lazy(() => import('./components/payment-methods/Venmo'));
const ApplePaySection = lazy(() => import('./components/payment-methods/ApplePay'));

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const paymentMethods = [
    { id: 'paypal', name: 'PayPal', Component: PayPalSection },
    { id: 'cashapp', name: 'CashApp', Component: CashAppSection },
    { id: 'chime', name: 'Chime', Component: ChimeSection },
    { id: 'venmo', name: 'Venmo', Component: VenmoSection },
    { id: 'applepay', name: 'Apple Pay', Component: ApplePaySection }
  ];

  return (
    <PaymentContext.Provider value={{ recipient, note, setRecipient, setNote }}>
      <div className="app-container">
        <header className="app-header">
          <h1>Cashier App POC</h1>
        </header>
        <div className="payment-details">
          <div className="input-group">
            <label htmlFor="recipient">Recipient ID:</label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter recipient ID"
            />
          </div>
          <div className="input-group">
            <label htmlFor="note">Payment Note:</label>
            <input
              type="text"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter payment note"
            />
          </div>
        </div>
        <main className="payment-sections">
          {paymentMethods.map((method) => (
            <div key={method.id} className="payment-section">
              <button
                className={`payment-button ${activeSection === method.id ? 'active' : ''}`}
                onClick={() => toggleSection(method.id)}
              >
                {method.name}
              </button>
              <div className={`collapsible-content ${activeSection === method.id ? 'open' : ''}`}>
                <div className="content-inner">
                  {activeSection === method.id && (
                    <Suspense fallback={<div>Loading...</div>}>
                      <method.Component />
                    </Suspense>
                  )}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </PaymentContext.Provider>
  )
}

export default App
