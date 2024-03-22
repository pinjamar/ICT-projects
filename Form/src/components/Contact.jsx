import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [addressError, setAddressError] = useState('');
  const countries = ['USA', 'Italy', 'Spain', 'Australia', 'Germany'];

  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateCountry = () => {
    if (!country) {
      setCountryError('Please select a country');
      return false;
    }
    setCountryError('');
    return true;
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError('Address is required');
      return false;
    }
    setAddressError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNameValid = validateName();
    const isCountryValid = validateCountry();
    const isAddressValid = validateAddress();

    if (isNameValid && isCountryValid && isAddressValid) {
      console.log('Form submitted:', { name, country, address });
    }
  };

  return (
    <div className="form-element-wrapper">
      <h2>Adresa</h2>
      <form onSubmit={handleSubmit} className="form-element">
        <div>
          <label htmlFor="name">Ime:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            className="text-input"
          />
          {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
        </div>
        <div>
          <label htmlFor="country">Država:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={validateCountry}
            className="text-input"
          >
            <option value="">Hrvatska</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {countryError && <span style={{ color: 'red' }}>{countryError}</span>}
        </div>
        <div>
          <label htmlFor="address">Adresa:</label>
          <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={validateAddress}
            className="text-input"
          />
          {addressError && <span style={{ color: 'red' }}>{addressError}</span>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
