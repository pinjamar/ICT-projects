/* eslint-disable react/prop-types */
function Shelf({ rez }) {
  return (
    <tr>
      <td>{rez.jakna.boja}</td>
      <td>{rez.majica.velicina}</td>
    </tr>
  );
}

export default Shelf;
