import { useState } from 'react';
import PropTypes from 'prop-types';

const Terms = ({ terms: propValue, onChange }) => {
  const [isChecked, setIsChecked] = useState(propValue);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    onChange({ formName: 'terms', formValue: newValue });
  };

  return (
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
  );
};

Terms.propTypes = {
  terms: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Terms;
