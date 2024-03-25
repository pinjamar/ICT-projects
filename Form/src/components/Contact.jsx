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
      setNameError('Molimo unesite ime!');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateCountry = () => {
    if (!country) {
      setCountryError('Molimo odaberite zemlju!');
      return false;
    }
    setCountryError('');
    return true;
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError('Molimo unesite adresu!');
      return false;
    }
    setAddressError('');
    return true;
  };

  const handleAddress = (event) => {
    event.preventDefault();
    const isNameValid = validateName();
    const isCountryValid = validateCountry();
    const isAddressValid = validateAddress();

    if (isNameValid && isCountryValid && isAddressValid) {
      console.log('Adresa unesena:', { name, country, address });
    }
  };

  return (
    <div className="form-element-wrapper">
      <h2 className="address-title">Adresa</h2>
      <div onSubmit={handleAddress} className="form-element">
        <div>
          <label htmlFor="name" className="name-label">
            Ime:
          </label>
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
        <div className="country-wrapper">
          <label htmlFor="country" className="country-label">
            Država:
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={validateCountry}
            className="text-input country-select"
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
        <div className="address-wrapper">
          <label htmlFor="address" className="address-label">
            Adresa:
          </label>
          <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={validateAddress}
            className="text-input"
          />
          {addressError && <span style={{ color: 'red' }}>{addressError}</span>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
