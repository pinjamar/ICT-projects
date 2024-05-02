import { useState } from 'react';

function NewOrg() {
  const [orgData, setOrgData] = useState({
    ime: '',
    opis: '',
    radionice: '',
  });

  const sendData = (event) => {
    event.preventDefault();
    console.log(orgData);
  };

  function changeData(event) {
    const { name, value } = event.target;
    setOrgData({ ...orgData, [name]: value });
  }

  return (
    <form onSubmit={sendData} className="form">
      <h3>Dodaj novu organizaciju</h3>
      <div className="form-element">
        <label>
          Ime:
          <input
            type="text"
            name="ime"
            value={orgData.ime}
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
            value={orgData.opis}
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
            value={orgData.radionice}
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

export default NewOrg;
