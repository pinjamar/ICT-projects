/* eslint-disable react/jsx-key */
import { useState } from 'react';
import PropTypes from 'prop-types';

const OrganizationFilter = (props) => {
  const [selectedOrganization, setSelectedOrganization] = useState('all');

  const { onOrgChange } = props;

  const handleOptionChange = (event) => {
    let selectedValue = event.target.value;
    setSelectedOrganization(selectedValue);
    if (selectedValue === 'all') {
      selectedValue = null;
    }
    onOrgChange(selectedValue);
  };
  return (
    <>
      <h1>Organizacije</h1>
      <label>
        <input
          type="radio"
          value="all"
          checked={selectedOrganization === 'all'}
          onChange={handleOptionChange}
        />
        Svi
      </label>
      <label>
        <input
          type="radio"
          value="Akademija Hogwarts"
          checked={selectedOrganization === 'Akademija Hogwarts'}
          onChange={handleOptionChange}
        />
        Akademija Hogwarts
      </label>
      <label>
        <input
          type="radio"
          value="Institut Max Planck"
          checked={selectedOrganization === 'Institut Max Planck'}
          onChange={handleOptionChange}
        />
        Institut Max Planck
      </label>
      <label>
        <input
          type="radio"
          value="Fakultet Ulica"
          checked={selectedOrganization === 'Fakultet Ulica'}
          onChange={handleOptionChange}
        />
        Fakultet Ulica
      </label>
    </>
  );
};

OrganizationFilter.propTypes = {
  onOrgChange: PropTypes.func,
};

export default OrganizationFilter;
