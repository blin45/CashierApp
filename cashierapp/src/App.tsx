import { useState, lazy, Suspense, createContext } from 'react'
import './App.css'

// Create context for payment details
export const PaymentContext = createContext({
  recipient: import.meta.env.VITE_RECIPIENT_ID || '',
  note: '',
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
  const [note, setNote] = useState('');
  const recipient = import.meta.env.VITE_RECIPIENT_ID || '';

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const paymentMethods = [
    { id: 'venmo', name: 'Venmo', Component: VenmoSection, logo: '/logos/venmo.png' },
    { id: 'paypal', name: 'PayPal', Component: PayPalSection, logo: '/logos/paypal.png' },
    { id: 'cashapp', name: 'CashApp', Component: CashAppSection, logo: '/logos/cashapp.png' },
    { id: 'chime', name: 'Chime', Component: ChimeSection, logo: '/logos/chime.png' },
    //{ id: 'applepay', name: 'Apple Pay', Component: ApplePaySection, logo: '/logos/apple.png' }
  ];

  return (
    <PaymentContext.Provider value={{ recipient, note, setNote }}>
      <div className="app-container">
        <header className="app-header">
          <h1>Cashier App</h1>
          <h2>Please select your payment method below</h2>
        </header>
        <main className="payment-sections">
          {paymentMethods.map((method) => (
            <div key={method.id} className="payment-section">
              <button
                className={`payment-button ${activeSection === method.id ? 'active' : ''}`}
                onClick={() => toggleSection(method.id)}
              >
                <span className="button-content">
                  <span className="button-text">{method.name}</span>
                  <img src={method.logo} alt={`${method.name} logo`} className="payment-logo" />
                </span>
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
