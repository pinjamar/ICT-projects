/* eslint-disable react/prop-types */
import Shelf from './Shelf';
import ClothesFilter from './ClothesFilter';

function Wardrobe({ odjeca }) {
  return (
    <div>
      <ClothesFilter />
      <h2 className="wardrobe-title">Popis</h2>
      <table>
        <thead>
          <tr>
            <th>Vrsta</th>
            <th>Veličina</th>
            <th>Marka</th>
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
    </div>
  );
}

export default Wardrobe;
