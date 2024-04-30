/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeader from '../common/header/AdminHeader';
import './admin.css';

function Admin() {
  const radionice = data.radionice;

  const mapiraneRadionice = radionice.map((radionica) => (
    <div key={radionica.id}>
      <table className="course-table-admin">
        <td>{radionica.ime}</td>
        <td>{radionica.broj_prijava}</td>
        <td>{radionica.datum}</td>
        <button>Uredi</button>
        <button>Izbriši</button>
      </table>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <AdminHeader />
      <p>{mapiraneRadionice}</p>
    </div>
  );
}

export default Admin;
