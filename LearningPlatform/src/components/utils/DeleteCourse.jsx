import axios from 'axios';
import { useState } from 'react';

function DeleteCourse(props) {
  const [idCourse, setIdCourse] = useState(0);

  async function deleteData() {
    console.log(`Brisem podatak ${idCourse}`).then((rez) => {
     await axios.delete(`http://localhost:3001/radionice/${idCourse}`)
     const rez = await axios.get(`http://localhost:3001/radionice`);
     props.change(state => state.filter(el => el.id != idCourse))
    });
  }

  return (
    <div>
      <h2>Brisanje podataka</h2>
      <div>
        <label>
          Unesite ID podatka:
          <input
            type="number"
            name="id"
            value={idCourse}
            onChange={(e) => setIdCourse(e.target.value)}
          />
        </label>
      </div>
      <button onClick={deleteData}>Izbriši</button>
    </div>
  );
}

export default DeleteCourse;
