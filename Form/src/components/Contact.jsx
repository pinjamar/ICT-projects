import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [addressError, setAddressError] = useState('');
  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];

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
      // Here you can handle form submission logic, such as sending data to a server
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-element">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
        />
        {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={validateCountry}
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {countryError && <span style={{ color: 'red' }}>{countryError}</span>}
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={validateAddress}
        />
        {addressError && <span style={{ color: 'red' }}>{addressError}</span>}
      </div>
    </form>
  );
};

export default Contact;
