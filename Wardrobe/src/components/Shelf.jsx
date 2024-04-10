/* eslint-disable react/prop-types */
function Shelf({ rez }) {
  return (
    <tr>
      <td>{rez.vrsta}</td>
      <td>{rez.velicina}</td>
      <td>{rez.marka}</td>
      <td>{rez.boja}</td>
      <td>{rez.slika}</td>
      <td>{rez.opcije}</td>
    </tr>
  );
}

export default Shelf;
