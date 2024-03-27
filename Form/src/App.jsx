import { useState } from 'react';
import './App.css';
import Email from './components/Email';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Terms from './components/Terms';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    name: '',
    country: 'Hrvatska',
    payment: '',
    isChecked: false,
  });

  const handleInputChange = (newFormData) => {
    const { formName, formValue } = newFormData;

    console.log(newFormData);

    setFormData({
      ...formData,
      [formName]: formValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.terms) {
      alert('Molimo vas prihvatite uvjete narudžbe!');
      return;
    }

    const formDataString = `Forma uspješno podnesena s ovim podacima:\nEmail: ${formData.email}\nIme: ${formData.name}\nDržava: ${formData.country}\nAdresa: ${formData.address}\nPlacanje: ${formData.payment}\n`;
    alert(formDataString);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="title">
        <h1>
          <span className="invoice-title">Račun --&gt; </span>Plaćanje
        </h1>
      </div>
      <Email
        type="text"
        onChange={handleInputChange}
        name="email"
        email={formData.email}
      />
      <Contact
        name={formData.fullName}
        country={formData.country}
        address={formData.address}
        onChange={handleInputChange}
        type="text"
      />
      <Payment payment={formData.payment} onChange={handleInputChange} />
      <Terms isChecked={formData.terms} onChange={handleInputChange} />
      <div className="button">
        <button type="submit">Naruči</button>
      </div>
    </form>
  );
}

export default App;
