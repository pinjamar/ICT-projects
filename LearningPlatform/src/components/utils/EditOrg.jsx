import { useState } from 'react';
import { useOrgs } from '../crud/serviceHooks';
import PropTypes from 'prop-types';

function EditOrg(props) {
  const orgsService = useOrgs();

  const [orgData, setOrgData] = useState(props.orgs);
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };
  const handleCloseClick = () => {
    setFormVisible(false);
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(orgData);
    orgsService.save(orgData);
    setFormVisible(false);
    props.onDone();
  };

  function changeData(event) {
    const { name, value } = event.target;
    setOrgData({ ...orgData, [name]: value });
  }

  return (
    <>
      <button onClick={handleButtonClick} className="edit-btn">
        Uredi
      </button>
      {formVisible && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={sendData} className="org-form">
              <h1>Uredi orgnaizaciju</h1>
              <div className="form-element">
                <input
                  type="text"
                  name="orgName"
                  value={orgData.ime}
                  onChange={changeData}
                  required
                  placeholder="Ime..."
                />
              </div>
              <div className="form-element">
                <input
                  type="text"
                  name="courses"
                  value={orgData.radionice}
                  onChange={changeData}
                  required
                  placeholder="Radionice..."
                />
              </div>
              <div className="form-element">
                <textarea
                  type="text"
                  name="orgDesc"
                  value={orgData.opis}
                  onChange={changeData}
                  required
                  placeholder="Opis..."
                />
              </div>
              <div>
                <button type="submit" className="submit-org">
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

EditOrg.propTypes = {
  orgs: PropTypes.any,
  onDone: PropTypes.func,
};

export default EditOrg;
