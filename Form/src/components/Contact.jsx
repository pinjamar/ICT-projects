import { useState } from 'react';
import PropTypes from 'prop-types';

const validateName = (name) => {
  return name && name.length >= 2;
};

const validateCountry = (country) => {
  return !!country;
};

const validateAddress = (address) => {
  return address && address.length >= 3;
};

const Contact = ({ fullName: currentName, onChange }) => {
  const [name, setName] = useState(currentName);
  const [nameError, setNameError] = useState('');
  const [country, setCountry] = useState('Hrvatska');
  const [countryError, setCountryError] = useState('');
  const countries = [
    'Hrvatska',
    'USA',
    'Italy',
    'Spain',
    'Australia',
    'Germany',
  ];
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const handleNameChange = (event) => {
    const { value } = event.target;
    let isNameValid = validateName(value);

    setNameError(isNameValid ? '' : 'Molimo unesite ime!');
    setName(value);

    if (isNameValid) {
      onChange({ formName: 'name', formValue: value });
    }
  };

  const handleCountryChange = (event) => {
    const { value } = event.target;
    let isCountryValid = validateCountry(value);

    setCountryError(isCountryValid ? '' : 'Molimo odaberite zemlju!');
    setCountry(value);

    if (isCountryValid) {
      onChange({ formName: 'country', formValue: value });
    }
  };

  const handleAddressChange = (event) => {
    const { value } = event.target;
    let isAddressValid = validateAddress(value);

    setAddressError(isAddressValid ? '' : 'Molimo unesite ispravnu adresu!');
    setAddress(value);

    if (isAddressValid) {
      onChange({ formName: 'address', formValue: value });
    }
  };

  return (
    <div className="form-element-wrapper">
      <h2 className="address-title">Adresa</h2>
      <div className="form-element">
        <div className="name-wrapper">
          <label htmlFor="name" className="name-label">
            Ime:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={validateName}
            className="text-input"
          />
          {!nameError && <span style={{ color: 'red' }}>{nameError}</span>}
        </div>
        <div className="country-wrapper">
          <label htmlFor="country" className="country-label">
            Država:
          </label>
          <select
            id="country"
            value={country}
            onChange={handleCountryChange}
            onBlur={validateCountry}
            className="text-input country-select"
          >
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
            onChange={handleAddressChange}
            onBlur={validateAddress}
            className="text-input"
          />
          {addressError && <span style={{ color: 'red' }}>{addressError}</span>}
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  fullName: PropTypes.string,
  country: PropTypes.string,
  address: PropTypes.string,
  onChange: PropTypes.func,
};

export default Contact;
