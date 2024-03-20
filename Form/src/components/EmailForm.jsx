import { useState } from 'react';

const EmailForm = () => {
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
      // Handle form submission logic here
      console.log('Email submitted:', email);
    } else {
      console.log('Invalid email:', email);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValid && (
        <p style={{ color: 'red' }}>Please enter a valid email address.</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
