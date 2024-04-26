/* eslint-disable react/prop-types */
import data from '../../../data.json';
import AdminHeader from '../common/header/AdminHeader';

function Admin() {
  const radionice = data.radionice;

  const mapiraneRadionice = radionice.map((radionica) => (
    <div key={radionica.id}>
      <table>
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
      {mapiraneRadionice}
    </div>
  );
}

export default Admin;
