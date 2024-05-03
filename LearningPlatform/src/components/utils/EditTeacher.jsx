import { useState } from 'react';
import { useTeachers } from '../crud/serviceHooks';
import PropTypes from 'prop-types';

function EditTeacher(props) {
  const teacherService = useTeachers();

  const [teacherData, setTeacherData] = useState(props.teacher);
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };
  const handleCloseClick = () => {
    setFormVisible(false);
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(teacherData);
    teacherService.save(teacherData);
    setFormVisible(false);
    props.onDone();
  };

  function changeData(event) {
    const { name, value } = event.target;
    setTeacherData({ ...teacherData, [name]: value });
  }

  return (
    <>
      <button onClick={handleButtonClick} className="edit-btn">Uredi</button>
      {formVisible && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={sendData} className="teacher-form">
              <h1 className="form-title">Uredi predavača</h1>
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

EditTeacher.propTypes = {
  teacher: PropTypes.any,
  onDone: PropTypes.func,
};

export default EditTeacher;
