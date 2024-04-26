/* eslint-disable react/prop-types */
import data from '../../../data.json';

function AdminOrganization() {
  const organizacije = data.organizacije;
  const radioniceOrganizacija = organizacije.organizacija;

  const mapiraneOrganizacije = organizacije.map((organizacija) => (
    <div key={organizacija.id}>
      <td>{organizacija.ime}</td>
      <td>{radioniceOrganizacija.map((r) => ({ r }))}</td>
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
        <button>+Dodaj</button>
      </div>
      {mapiraneOrganizacije}
    </div>
  );
}

export default AdminOrganization;
