/* eslint-disable react/jsx-key */
import { useState } from 'react';
import PropTypes from 'prop-types';

const DifficultyFilter = (props) => {
  const [selectedDiff, setSelectedDiff] = useState('all');

  const { onDifChange } = props;

  const handleOptionChange = (event) => {
    let selectedValue = event.target.value;
    setSelectedDiff(selectedValue);
    if (selectedValue === 'all') {
      selectedValue = null;
    }
    onDifChange(selectedValue);
  };
  return (
    <>
      <h1>Težina</h1>
      <label>
        <input
          type="radio"
          value="all"
          checked={selectedDiff === 'all'}
          onChange={handleOptionChange}
        />
        Svi
      </label>
      <label>
        <input
          type="radio"
          value="Junior"
          checked={selectedDiff === 'Junior'}
          onChange={handleOptionChange}
        />
        Junior
      </label>
      <label>
        <input
          type="radio"
          value="Mid"
          checked={selectedDiff === 'Mid'}
          onChange={handleOptionChange}
        />
        Mid
      </label>
      <label>
        <input
          type="radio"
          value="Senior"
          checked={selectedDiff === 'Senior'}
          onChange={handleOptionChange}
        />
        Senior
      </label>
    </>
  );
};

DifficultyFilter.propTypes = {
  onDifChange: PropTypes.func,
};

export default DifficultyFilter;
