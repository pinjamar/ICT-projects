/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditCourse = ({
  radionice,
  handleEdit,
  editOpis,
  setEditOpis,
  editIme,
  setEditIme,
}) => {
  const { id } = useParams();
  const radionica = radionice.find(
    (radionica) => radionica.id.toString() === id
  );

  useEffect(() => {
    if (radionica) {
      setEditIme(radionica.ime);
      setEditOpis(radionica.opis);
    }
  }, [radionica, setEditIme, setEditOpis]);

  return (
    <main className="NewCourse">
      {editIme && (
        <>
          <h2>Editiraj Radionicu</h2>
          <form className="newCourseForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="radionicaIme">Ime:</label>
            <input
              id="radionicaIme"
              type="text"
              required
              value={editIme}
              onChange={(e) => setEditIme(e.target.value)}
            />
            <label htmlFor="radionicaOpis">Opis:</label>
            <textarea
              id="radionicaOpis"
              required
              value={editOpis}
              onChange={(e) => setEditOpis(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(radionica.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editIme && (
        <>
          <h2>Radionica nije pronadjena</h2>
          <p>
            <Link to="/">Otidji na naslovnicu</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditCourse;
