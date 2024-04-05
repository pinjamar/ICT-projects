/* eslint-disable react/prop-types */
import Shelf from './Shelf';

function Wardrobe({ odjeca }) {
  return (
    <>
      <h1>Popis</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vrsta</th>
            <th>Veličina</th>
            <th>Boja</th>
            <th>Slika</th>
            <th>Opcije</th>
          </tr>
        </thead>
        <tbody>
          {odjeca.map((r) => (
            <Shelf key={r.id} rez={r} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Wardrobe;
