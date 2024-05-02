import axios from 'axios';
import { useState } from 'react';

function DeleteOrg(props) {
  const [idOrg, setIdOrg] = useState(0);

  async function deleteData() {
    console.log(`Brisem podatak ${idOrg}`).then((rez) => {
     await axios.delete(`http://localhost:3001/organizacije/${idOrg}`)
     const rez = await axios.get(`http://localhost:3001/organizacije`);
     props.change(state => state.filter(el => el.id != idOrg))
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
            value={idOrg}
            onChange={(e) => setIdOrg(e.target.value)}
          />
        </label>
      </div>
      <button onClick={deleteData}>Izbriši</button>
    </div>
  );
}

export default DeleteOrg;