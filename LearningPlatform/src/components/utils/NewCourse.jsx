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
    <form onSubmit={sendData} className="course-form">
      <h1>Dodaj novu radionicu</h1>
      <div className="course-form-one">
        <div className="form-name-date">
          <div className="form-element">
            <input
              type="text"
              name="ime"
              value={courseData.ime}
              onChange={changeData}
              required
              placeholder="Ime radionice..."
            />
          </div>
          <div className="form-element">
            <input
              type="text"
              name="datum"
              value={courseData.datum}
              onChange={changeData}
              required
              placeholder="Datum održavanja..."
            />
          </div>
        </div>
        <div>
          <div className="form-element">
            <input
              type="text"
              name="tema"
              value={courseData.tema}
              onChange={changeData}
              required
              placeholder="Tema"
            />
          </div>
          <div className="form-element">
            <input
              type="text"
              name="tezina"
              value={courseData.tezina}
              onChange={changeData}
              required
              placeholder="Tezina"
            />
          </div>
        </div>
      </div>
      <div className="form-element">
        <textarea
          type="text"
          name="opis"
          value={courseData.opis}
          onChange={changeData}
          required
          placeholder="Opis radionice..."
        />
      </div>
      <div className="form-element">
        <input
          type="text"
          name="predavac"
          value={courseData.predavac}
          onChange={changeData}
          required
          placeholder="Predavač..."
        />
      </div>
      <button type="submit" className="submit-course">
        Spremi ✓
      </button>
    </form>
  );
}

export default NewCourse;
