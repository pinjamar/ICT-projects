/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeaderOrg from '../common/header/adminHeaders/AdminHeaderOrg';
import './admin.css';

function AdminOrganization() {
  const organizacije = data.organizacije;

  const mapiraneOrganizacije = organizacije.map((organizacija) => (
    <div key={organizacija.id}>
      <table className="org-table-admin">
        <td>{organizacija.ime}</td>
        <button className="edit-btn">Uredi</button>
        <button className="delete-btn">Izbriši</button>
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
