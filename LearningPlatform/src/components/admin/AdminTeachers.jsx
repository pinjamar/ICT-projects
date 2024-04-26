/* eslint-disable react/prop-types */
import data from '../../../data.json';

function AdminTeachers() {
  const predavaci = data.predavaci;
  //   const predavaciTema = predavaci.tema;

  const mapiraniPredavaci = predavaci.map((predavac) => (
    <div key={predavac.id}>
      <td>{predavac.ime}</td>
      <td>{predavac.organizacija}</td>
      {/* <td>{predavaciTema.map((r) => ({ r }))}</td> */}
      <button>Uredi</button>
      <button>Izbriši</button>
    </div>
  ));
  return (
    <div className="admin-radionice">
      <div>
        <p>Radionice</p>
        <p>Organizacije</p>
        <p>Predavaci</p>
      </div>
      {mapiraniPredavaci}
    </div>
  );
}

export default AdminTeachers;
