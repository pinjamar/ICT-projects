/* eslint-disable react/prop-types */
import data from '../../../data.json';
import { useParams, Link } from 'react-router-dom';
import AdminHeaderCourse from '../common/header/adminHeaders/AdminHeaderCourse';
import EditCourse from '../utils/EditCourse';
import axios from 'axios';
import './admin.css';

function AdminCourses() {
  const radionice = data.radionice;

  const mapiraneRadionice = radionice.map((radionica) => (
    <div key={radionica.id}>
      <table className="course-table-admin">
        <td>{radionica.ime}</td>
        <td>Prijave ({radionica.broj_prijava})</td>
        <td>{radionica.datum}</td>
        <button className="edit-btn">
          <EditCourse />
        </button>
        <button className="delete-btn" onClick={() => handleDelete()}>
          Izbriši
        </button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeaderCourse />
      <p>{mapiraneRadionice}</p>
    </div>
  );
}

export default AdminCourses;
