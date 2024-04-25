/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { organizacije } from '../../../../data.json';

const OrganizationFilter = () => {
  const [selectedOrganization, setSelectedOrganization] = useState('all');

  const handleOptionChange = (event) => {
    setSelectedOrganization(event.target.value);
  };
  return (
    <>
      <h1>Organizacije</h1>
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

export default OrganizationFilter;
