import { useState } from 'react';
import { useCourses } from '../crud/serviceHooks';
import PropTypes from 'prop-types';

function EditCourse(props) {
  const radioniceService = useCourses();

  const [courseData, setCourseData] = useState(props.course);
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };
  const handleCloseClick = () => {
    setFormVisible(false);
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(courseData);
    radioniceService.save(courseData);
    setFormVisible(false);
    props.onDone();
  };

  function changeData(event) {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  }

  return (
    <>
      <div onClick={handleButtonClick}>Uredi</div>
      {formVisible && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={sendData} className="course-form">
              <h1 className="course-title">Uredi radionicu</h1>
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
              <div>
                <button type="submit" className="submit-course">
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

EditCourse.propTypes = {
  course: PropTypes.any,
  onDone: PropTypes.func,
};

export default EditCourse;
