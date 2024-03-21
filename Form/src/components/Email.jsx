import { useState } from 'react';

const Email = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (event) => {
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
    <form onSubmit={handleSubmit} className="form-element">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Email adresa..."
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValid && (
        <p style={{ color: 'red' }}>Molimo unesite valjanu email adresu.</p>
      )}
    </form>
  );
};

export default Email;
