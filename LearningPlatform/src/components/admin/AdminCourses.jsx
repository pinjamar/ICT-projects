/* eslint-disable react/prop-types */
import { useState } from 'react';
import AdminHeaderCourse from '../common/header/adminHeaders/AdminHeaderCourse';
import EditCourse from '../utils/EditCourse';
import { useCourses } from '../crud/serviceHooks';
import './admin.css';

function AdminCourses() {
  const radioniceService = useCourses();

  const [radionice, setRadionice] = useState(radioniceService.getAll());

  const reload = () => {
    setRadionice(radioniceService.getAll());
  };

  const deleteCourse = (id) => {
    const updatedCourses = radionice.filter((radionica) => radionica.id !== id);
    setRadionice(updatedCourses);
  };

  const mapiraneRadionice = radionice.map((radionica) => (
    <div key={radionica.id}>
      <table className="course-table-admin">
        <td>{radionica.ime}</td>
        <td>Prijave ({radionica.broj_prijava})</td>
        <td>{radionica.datum}</td>
        <EditCourse course={radionica} onDone={reload} />
        <button
          className="delete-btn"
          onClick={() => deleteCourse(radionica.id)}
        >
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
