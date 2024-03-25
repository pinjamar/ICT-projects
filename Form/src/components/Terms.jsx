import { useState } from 'react';

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTerms = (event) => {
    event.preventDefault();
    console.log('Checkbox value:', isChecked);
  };

  return (
    <div onSubmit={handleTerms}>
      <div className="terms-confirmation">
        <input
          type="checkbox"
          id="myCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="myCheckbox" className="checkbox">
          <span className="acceptance">Prihvaćam uvjete narudžbe</span>
        </label>
      </div>
    </div>
  );
};

export default Terms;
