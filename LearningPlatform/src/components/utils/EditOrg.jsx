/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditOrg = ({
  organizacije,
  handleEdit,
  editOpis,
  setEditOpis,
  editIme,
  setEditIme,
}) => {
  const { id } = useParams();
  const organizacija = organizacije.find(
    (organizacija) => organizacija.id.toString() === id
  );

  useEffect(() => {
    if (organizacija) {
      setEditIme(organizacija.ime);
      setEditOpis(organizacija.opis);
    }
  }, [organizacija, setEditIme, setEditOpis]);

  return (
    <main className="NewOrg">
      {editIme && (
        <>
          <h2>Editiraj Organizaciju</h2>
          <form className="newOrgForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="organizacijaIme">Ime:</label>
            <input
              id="organizacijaIme"
              type="text"
              required
              value={editIme}
              onChange={(e) => setEditIme(e.target.value)}
            />
            <label htmlFor="organizacijaOpis">Opis:</label>
            <textarea
              id="organizacijaOpis"
              required
              value={editOpis}
              onChange={(e) => setEditOpis(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(organizacija.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editIme && (
        <>
          <h2>Organizacija nije pronadjena</h2>
          <p>
            <Link to="/">Otidji na naslovnicu</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditOrg;
