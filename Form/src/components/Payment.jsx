import { useState } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    if (paymentMethod) {
      console.log('Payment method selected:', paymentMethod);
    } else {
      console.log('Please select a payment method');
    }
  };

  return (
    <form onSubmit={handlePayment} className="form-element">
      <div>
        <input
          type="radio"
          id="cash"
          name="paymentMethod"
          value="cash"
          checked={paymentMethod === 'cash'}
          onChange={handlePaymentChange}
        />
        <label htmlFor="cash">Pouzeće</label>
      </div>
      <div>
        <input
          type="radio"
          id="card"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === 'card'}
          onChange={handlePaymentChange}
        />
        <label htmlFor="card">Kartica</label>
      </div>
    </form>
  );
};

export default PaymentForm;
