/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeaderTeacher from '../common/header/adminHeaders/AdminHeaderTeacher';
import EditTeacher from '../utils/EditTeacher';
import './admin.css';

function AdminTeachers() {
  const predavaci = data.predavaci;

  const mapiraniPredavaci = predavaci.map((predavac) => (
    <div key={predavac.id}>
      <table className="teacher-table-admin">
        <td>{predavac.ime}</td>
        <td>{predavac.organizacija}</td>
        <button className="edit-btn">
          <EditTeacher />
        </button>
        <button className="delete-btn">Izbriši</button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeaderTeacher />
      {mapiraniPredavaci}
    </div>
  );
}

export default AdminTeachers;
