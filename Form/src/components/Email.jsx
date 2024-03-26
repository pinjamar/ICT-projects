import { useState } from 'react';
import PropTypes from 'prop-types';

const Email = ({ email: currentMail, onChange }) => {
  const [email, setEmail] = useState(currentMail);
  const [isValid, setIsValid] = useState(validateEmail(currentMail));

  const handleEmailChange = (event) => {
    const { value } = event.target;
    let isEmailValid = validateEmail(value);

    setIsValid(isEmailValid);
    setEmail(value);

    if (isEmailValid) {
      onChange({ formName: 'email', formValue: value });
    }
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="form-element-wrapper">
      <h2 className="email-title">Kontakt</h2>
      <div className="form-element">
        <input
          type="email"
          id="email"
          placeholder="Email adresa..."
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: isValid ? 'initial' : 'red' }}
          className="text-input"
        />
        {!isValid && (
          <p style={{ color: 'red' }}>Molimo unesite valjanu email adresu.</p>
        )}
      </div>
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func,
};

export default Email;
