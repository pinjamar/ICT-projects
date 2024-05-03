/* eslint-disable react/jsx-key */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTeachers } from '../../crud/serviceHooks';

const ThemeFilter = (props) => {
  const [selectedTheme, setselectedTheme] = useState('all');

  const { onThemeChange } = props;

  const teacherService = useTeachers()
  const themes = Array.from(new Set(teacherService.getAll().flatMap(it => it.tema)))

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
      {themes.map(it => {
        return (
          <label>
          <input
            type="radio"
            value={it}
            checked={selectedTheme === it}
            onChange={handleOptionChange}
          />
          {it}
        </label>
        )
      })}
    </>
  );
};

ThemeFilter.propTypes = {
  onThemeChange: PropTypes.func,
};

export default ThemeFilter;
