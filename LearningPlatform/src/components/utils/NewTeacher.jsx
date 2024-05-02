import { useState } from 'react';

function NewTeacher() {
  const [teacherData, setTeacherData] = useState({
    ime: '',
    biografija: '',
    organizacija: '',
    tema: '',
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true); // Set the form visibility to true when the button is clicked
  };
  const handleCloseClick = () => {
    setFormVisible(false); // Set the form visibility to false when the close button is clicked
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(teacherData);
  };

  function changeData(event) {
    const { name, value } = event.target;
    setTeacherData({ ...teacherData, [name]: value });
  }

  return (
    <>
      <div onClick={handleButtonClick}>+Dodaj novog predavača</div>
      {formVisible && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={sendData} className="teacher-form">
              <h1 className="form-title">Dodaj novog predavača</h1>
              <div className="form-name-org">
                <div className="form-element teacher-name">
                  <input
                    type="text"
                    name="ime"
                    value={teacherData.ime}
                    onChange={changeData}
                    required
                    placeholder="Ime..."
                  />
                </div>
                <div className="form-element teacher-org">
                  <input
                    type="text"
                    name="org"
                    value={teacherData.organizacija}
                    onChange={changeData}
                    required
                    placeholder="Organizacija..."
                  />
                </div>
              </div>
              <div className="form-element">
                <textarea
                  type="text"
                  name="biografija"
                  value={teacherData.biografija}
                  onChange={changeData}
                  required
                  placeholder="Biografija..."
                />
              </div>
              <div className="form-element">
                <input
                  type="text"
                  name="tema"
                  value={teacherData.tema}
                  onChange={changeData}
                  required
                  placeholder="Tema.."
                />
              </div>
              <div>
                <button type="submit" className="submit-teacher">
                  Spremi ✓
                </button>
                <button
                  type="button"
                  onClick={handleCloseClick}
                  className="close-button"
                >
                  Zatvori
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default NewTeacher;
