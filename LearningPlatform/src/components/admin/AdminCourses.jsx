/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeaderCourse from '../common/header/adminHeaders/AdminHeaderCourse';
import NewOrg from '../utils/NewOrg';
import './admin.css';

function AdminCourses() {
  const radionice = data.radionice;

  const mapiraneRadionice = radionice.map((radionica) => (
    <div key={radionica.id}>
      <table className="course-table-admin">
        <td>{radionica.ime}</td>
        <td>Prijave ({radionica.broj_prijava})</td>
        <td>{radionica.datum}</td>
        <button className="edit-btn">Uredi</button>
        <button className="delete-btn">Izbriši</button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeaderCourse />
      <p>{mapiraneRadionice}</p>
      <NewOrg />
    </div>
  );
}

export default AdminCourses;
