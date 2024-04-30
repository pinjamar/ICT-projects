/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeader from '../common/header/AdminHeader';
import './admin.css';

function AdminOrganization() {
  const organizacije = data.organizacije;

  const mapiraneOrganizacije = organizacije.map((organizacija) => (
    <div key={organizacija.id}>
      <table className="org-table-admin">
        <td>{organizacija.ime}</td>
        <button>Uredi</button>
        <button>Izbriši</button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeader />
      {mapiraneOrganizacije}
    </div>
  );
}

export default AdminOrganization;
