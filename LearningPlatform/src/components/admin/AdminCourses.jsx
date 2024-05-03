/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeaderCourse from '../common/header/adminHeaders/AdminHeaderCourse';
import EditCourse from '../utils/EditCourse';
import axios from 'axios';
import './admin.css';

function AdminCourses() {
  const radionice = data.radionice;

  const handleDelete = ({ radionica, onDelete }) => {
    // Make a DELETE request to the API endpoint to delete the object
    axios
      .delete(`http://localhost:3001/radionice/${radionica.id}`)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        // If deletion is successful, call the onDelete callback to update the UI
        onDelete(radionica.id);
      })
      .catch((error) => {
        // Handle errors, such as displaying an error message to the user
        console.error('Error deleting object:', error);
      });
  };

  const mapiraneRadionice = radionice.map((radionica) => (
    <div key={radionica.id}>
      <table className="course-table-admin">
        <td>{radionica.ime}</td>
        <td>Prijave ({radionica.broj_prijava})</td>
        <td>{radionica.datum}</td>
        <button className="edit-btn">
          <EditCourse />
        </button>
        <button className="delete-btn" onClick={handleDelete}>
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
