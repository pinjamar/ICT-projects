import { useState } from 'react';
import './App.css';
import Email from './components/Email';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Terms from './components/Terms';

function App() {
  const [formData, setFormData] = useState({
    email: <Email />,
    address: '',
    name: '',
    country: '',
    payment: '',
    terms: '',
  });

  const handleInputChange = (event) => {
    const { name, email, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      [email]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!formData.terms) {
    //   alert('Molimo vas prihvatite uvjete narudžbe!');
    //   return;
    // }

    const formDataString = `Forma uspješno podnesena s ovim podacima:\nEmail: ${formData.email}\nIme: ${formData.name}\nDržava: ${formData.country}\nAdresa: ${formData.address}\nPlacanje: ${formData.payment}\n`;
    alert(formDataString);

    setFormData({
      email: '',
      address: '',
      name: '',
      country: '',
      payment: '',
      terms: '',
    });
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
        value={formData.email}
      />
      <Contact />
      <Payment />
      <Terms />
      <div className="button">
        <button type="submit">Naruči</button>
      </div>
    </form>
  );
}

export default App;
