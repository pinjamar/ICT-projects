/* eslint-disable react/jsx-key */
import { useState } from 'react';
import PropTypes from 'prop-types';

const ThemeFilter = (props) => {
  const [selectedTheme, setselectedTheme] = useState('all');

  const { onThemeChange } = props;

  const handleOptionChange = (event) => {
    let selectedValue = event.target.value;
    setselectedTheme(selectedValue);
    if (selectedValue === 'all') {
      selectedValue = null;
    }
    onThemeChange(selectedValue);
  };
  return (
    <>
      <h1>Teme</h1>
      <label>
        <input
          type="radio"
          value="all"
          checked={selectedTheme === 'all'}
          onChange={handleOptionChange}
        />
        Svi
      </label>
      <label>
        <input
          type="radio"
          value="Znanost"
          checked={selectedTheme === 'Znanost'}
          onChange={handleOptionChange}
        />
        Znanost
      </label>
      <label>
        <input
          type="radio"
          value="Magija"
          checked={selectedTheme === 'Magija'}
          onChange={handleOptionChange}
        />
        Magija
      </label>
      <label>
        <input
          type="radio"
          value="Programiranje"
          checked={selectedTheme === 'Programiranje'}
          onChange={handleOptionChange}
        />
        Programiranje
      </label>
    </>
  );
};

ThemeFilter.propTypes = {
  onThemeChange: PropTypes.func,
};

export default ThemeFilter;
