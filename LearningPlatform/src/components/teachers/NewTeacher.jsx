import { useState } from 'react';

function NewTeacher() {
  const [teacherData, setTeacherData] = useState({
    ime: '',
    biografija: '',
    organizacija: '',
    tema: '',
  });

  const sendData = (event) => {
    event.preventDefault();
    console.log(teacherData);
  };

  function changeData(event) {
    const { name, value } = event.target;
    setTeacherData({ ...teacherData, [name]: value });
  }

  return (
    <form onSubmit={sendData} className="form">
      <h3>Dodaj novog predavaca</h3>
      <div className="form-element">
        <label>
          Ime:
          <input
            type="text"
            name="ime"
            value={teacherData.ime}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Biografija:
          <input
            type="text"
            name="biografija"
            value={teacherData.biografija}
            onChange={changeData}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Organizacija:
          <input
            type="text"
            name="organizacija"
            value={teacherData.organizacija}
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
            value={teacherData.tema}
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

export default NewTeacher;
