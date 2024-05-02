import { useState } from 'react';

function NewCourse() {
  const [courseData, setCourseData] = useState({
    ime: '',
    opis: '',
    predavac: '',
    datum: '',
    tema: '',
    tezina: '',
  });

  const sendData = (event) => {
    event.preventDefault();
    console.log(courseData);
  };

  function changeData(event) {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  }

  return (
    <form onSubmit={sendData} className="form">
      <h3>Dodaj novu radionicu</h3>
      <div className="form-element">
        <label>
          Ime:
          <input
            type="text"
            name="ime"
            value={courseData.ime}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Datum:
          <input
            type="text"
            name="datum"
            value={courseData.datum}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Opis:
          <input
            type="text"
            name="opis"
            value={courseData.opis}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Boja:
          <input
            type="text"
            name="predavac"
            value={courseData.predavac}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Tema:
          <input
            type="text"
            name="tema"
            value={courseData.tema}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Tezina:
          <input
            type="text"
            name="tezina"
            value={courseData.tezina}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <button type="submit" className="submit-button">
        Spremi ✓
      </button>
    </form>
  );
}

export default NewCourse;
