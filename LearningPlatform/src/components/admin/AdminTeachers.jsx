/* eslint-disable react/prop-types */
import { useState } from 'react';
import AdminHeaderTeacher from '../common/header/adminHeaders/AdminHeaderTeacher';
import { useTeachers } from '../crud/serviceHooks';
import EditTeacher from '../utils/EditTeacher';
import './admin.css';

function AdminTeachers() {
  const teacherService = useTeachers()

  const [predavaci, setPredavaci] = useState(teacherService.getAll())

  const reload = () => {
    setPredavaci(teacherService.getAll())
  }

  const deleteTeacher = (id) => {
    teacherService.deleteId(id)
    reload()
  }

  const mapiraniPredavaci = predavaci.map((predavac) => (
    <div key={predavac.id}>
      <table className="teacher-table-admin">
        <td>{predavac.ime}</td>
        <td>{predavac.organizacija}</td>
        <EditTeacher teacher={predavac} onDone={reload} />
        <button
          className="delete-btn"
          onClick={() => deleteTeacher(predavac.id)}
        >
          Izbriši
        </button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeaderTeacher reload={reload} />
      {mapiraniPredavaci}
    </div>
  );
}

export default AdminTeachers;
