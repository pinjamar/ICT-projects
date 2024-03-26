import { useState } from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name: currentName, onChange }) => {
  const [name, setName] = useState(currentName);
  const [isNameValid, setIsNameValid] = useState(validateName(currentName));
  const [nameError, setNameError] = useState('');
  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');
  const countries = ['USA', 'Italy', 'Spain', 'Australia', 'Germany'];
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const validateName = () => {
    if (!name || name.length < 2) {
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
    if (!address || address.length < 3) {
      setAddressError('Molimo unesite adresu!');
      return false;
    }
    setAddressError('');
    return true;
  };

  const handleAddress = (event) => {
    const { value } = event.target;
    const isNameValid = validateName(value);
    const isCountryValid = validateCountry();
    const isAddressValid = validateAddress();

    if (isNameValid) {
      onChange({ formName: 'name', formValue: value });
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

Name.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Contact;
