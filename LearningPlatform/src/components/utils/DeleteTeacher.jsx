import { useState } from 'react';

function DeleteTeacher(props) {
  const [idTeacher, setIdTeacher] = useState(0);

  async function deleteData() {
    console.log(`Brisem podatak ${idTeacher}`).then((rez) => {
     await axios.delete(`http://localhost:3001/predavaci/${idTeacher}`)
     const rez = await axios.get(`http://localhost:3001/predavaci`);
     props.change(state => state.filter(el => el.id != idTeacher))
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
            value={idTeacher}
            onChange={(e) => setIdTeacher(e.target.value)}
          />
        </label>
      </div>
      <button onClick={deleteData}>Obriši radionicu</button>
    </div>
  );
}

export default DeleteTeacher;