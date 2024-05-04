/* eslint-disable react/jsx-key */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useOrgs } from '../../crud/serviceHooks';

const OrganizationFilter = (props) => {
  const [selectedOrganization, setSelectedOrganization] = useState('all');

  const { onOrgChange } = props;

  const orgService = useOrgs();
  const orgs = orgService.getAll();

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
      {orgs.map((it) => {
        return (
          <label key={it.id}>
            <input
              type="radio"
              value={it.ime}
              checked={selectedOrganization === it.ime}
              onChange={handleOptionChange}
            />
            {it.ime}
          </label>
        );
      })}
    </>
  );
};

OrganizationFilter.propTypes = {
  onOrgChange: PropTypes.func,
};

export default OrganizationFilter;
