import { useState } from 'react';
import './App.css';
import Email from './components/Email';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Terms from './components/Terms';

function App() {
  // Step 1: Initialize state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Step 2: Handle form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
    // You might want to send the form data to an API or perform other actions here
    // After submission, you can reset the form if needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
    });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="title">
        <h1>
          <span className="invoice-title">Račun --&gt; </span>Plaćanje
        </h1>
      </div>
      <Email onChange={handleInputChange} />
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
