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
    <form onSubmit={handleTerms}>
      <div>
        <input
          type="checkbox"
          id="myCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="myCheckbox">Prihvaćam uvjete narudžbe</label>
      </div>
    </form>
  );
};

export default Terms;
