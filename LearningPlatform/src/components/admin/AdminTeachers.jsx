/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeader from '../common/header/AdminHeader';
import './admin.css';

function AdminTeachers() {
  const predavaci = data.predavaci;

  const mapiraniPredavaci = predavaci.map((predavac) => (
    <div key={predavac.id}>
      <table className="teacher-table-admin">
        <td>{predavac.ime}</td>
        <td>{predavac.organizacija}</td>
        <button>Uredi</button>
        <button>Izbriši</button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeader />
      {mapiraniPredavaci}
    </div>
  );
}

export default AdminTeachers;
