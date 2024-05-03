/* eslint-disable react/prop-types */
import { useState } from 'react';
import AdminHeaderTeacher from '../common/header/adminHeaders/AdminHeaderTeacher';
import { useTeachers } from '../crud/serviceHooks';
import EditTeacher from '../utils/EditTeacher';
import './admin.css';

function AdminTeachers() {
  const teacherService = useTeachers();

  const [predavaci, setPredavaci] = useState(teacherService.getAll());

  const reload = () => {
    setPredavaci(teacherService.getAll());
  };

  const mapiraniPredavaci = predavaci.map((predavac) => (
    <div key={predavac.id}>
      <table className="teacher-table-admin">
        <td>{predavac.ime}</td>
        <td>{predavac.organizacija}</td>
        <button className="edit-btn">
          <EditTeacher teacher={predavac} onDone={reload} />
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
