import { useState } from 'react';
import './modal.css';

function CourseApply() {
  const [studentData, setstudentData] = useState({
    ime: '',
    email: '',
    razlog: '',
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };
  const handleCloseClick = () => {
    setFormVisible(false);
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(studentData);
  };

  function changeData(event) {
    const { ime, value } = event.target;
    setstudentData({ ...studentData, [ime]: value });
  }

  return (
    <>
      <div onClick={handleButtonClick}>Prijavi se!</div>
      {formVisible && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={sendData} className="teacher-form">
              <h1 className="form-title">Prijavi se na radionicu</h1>
              <div className="form-name-org">
                <div className="form-element teacher-name">
                  <input
                    type="text"
                    name="ime"
                    value={studentData.ime}
                    onChange={changeData}
                    required
                    placeholder="Puno ime..."
                  />
                </div>
                <div className="form-element teacher-org">
                  <input
                    type="text"
                    name="email"
                    value={studentData.email}
                    onChange={changeData}
                    required
                    placeholder="Email..."
                  />
                </div>
              </div>
              <div className="form-element">
                <textarea
                  type="text"
                  name="razlog"
                  value={studentData.razlog}
                  onChange={changeData}
                  required
                  placeholder="Razlog prijave..."
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
                  &#10006;
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseApply;
