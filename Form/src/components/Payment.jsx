import { useState } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('gotovina');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    if (paymentMethod) {
      console.log('Odabran način plaćanja:', paymentMethod);
    } else {
      console.log('Molimo odaberite način plaćanja!');
    }
  };

  return (
    <div className="form-element-wrapper">
      <h2 className="payment-title">Način plaćanja:</h2>
      <div onSubmit={handlePayment} className="form-element payment-element">
        <div>
          <input
            type="radio"
            id="gotovina"
            name="paymentMethod"
            value="gotovina"
            checked={paymentMethod === 'gotovina'}
            onChange={handlePaymentChange}
          />
          <label htmlFor="gotovina">Pouzeće</label>
        </div>
        <div>
          <input
            type="radio"
            id="kartica"
            name="paymentMethod"
            value="kartica"
            checked={paymentMethod === 'kartica'}
            onChange={handlePaymentChange}
          />
          <label htmlFor="kartica">Kartica</label>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
