import { useState } from 'react';
import PropTypes from 'prop-types';

const Contact = ({ fullName: currentName, onChange }) => {
  const [name, setName] = useState(currentName);
  const [nameError, setNameError] = useState('');
  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');
  const countries = ['USA', 'Italy', 'Spain', 'Australia', 'Germany'];
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const handleNameChange = (event) => {
    const { value } = event.target;
    console.log(value);
    let isNameValid = validateName(value);

    setNameError(isNameValid);
    setName(value);

    if (isNameValid) {
      onChange({ formName: 'name', formValue: value });
    }
  };

  const handleCountryChange = (event) => {
    const { value } = event.target;
    console.log(value);
    let isCountryValid = validateCountry();

    setCountryError(isCountryValid);
    setCountry(value);

    if (isCountryValid) {
      onChange({ formName: 'country', formValue: value });
    }
  };

  const handleAddressChange = (event) => {
    const { value } = event.target;
    let isAddressValid = validateAddress();
    setAddress(value);
    if (isAddressValid) {
      onChange({ formName: 'address', formValue: value });
    }
  };

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
      setAddressError('Molimo unesite ispravnu adresu!');
      return false;
    }
    setAddressError('');
    return true;
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
