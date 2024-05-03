/* eslint-disable react/prop-types */
import AdminHeaderOrg from '../common/header/adminHeaders/AdminHeaderOrg';
import { useOrgs } from '../crud/serviceHooks';
import EditOrg from '../utils/EditOrg';
import { useState } from 'react';
import './admin.css';

function AdminOrganization() {
  const orgsService = useOrgs();

  const [organizacije, setOrganizacije] = useState(orgsService.getAll());

  const reload = () => {
    setOrganizacije(orgsService.getAll());
  };

  const deleteOrg = (id) => {
    orgsService.delete(id)
  };

  const mapiraneOrganizacije = organizacije.map((organizacija) => (
    <div key={organizacija.id}>
      <table className="org-table-admin">
        <td>{organizacija.ime}</td>
        <button className="edit-btn">
          <EditOrg orgs={organizacija} onDone={reload} />
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteOrg(organizacija.id)}
        >
          Izbriši
        </button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeaderOrg />
      {mapiraneOrganizacije}
    </div>
  );
}

export default AdminOrganization;
