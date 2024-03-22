import { useState } from 'react';

const Email = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleEmail = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log('Email submitted:', email);
    } else {
      console.log('Invalid email:', email);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-element-wrapper">
      <h2>Kontakt</h2>
      <form onSubmit={handleEmail} className="form-element">
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
      </form>
    </div>
  );
};

export default Email;
