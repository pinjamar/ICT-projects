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
    <form onSubmit={sendData} className="org-form">
      <h1>Dodaj novu organizaciju</h1>
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
      <button type="submit" className="submit-org">
        Spremi ✓
      </button>
    </form>
  );
}

export default NewOrg;