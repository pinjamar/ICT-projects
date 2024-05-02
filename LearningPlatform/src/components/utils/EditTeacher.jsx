/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditCourse = ({
  predavaci,
  handleEdit,
  editBiografija,
  setEditBiografija,
  editIme,
  setEditIme,
}) => {
  const { id } = useParams();
  const predavac = predavaci.find((predavac) => predavac.id.toString() === id);

  useEffect(() => {
    if (predavac) {
      setEditIme(predavac.ime);
      setEditBiografija(predavac.biografija);
    }
  }, [predavac, setEditIme, setEditBiografija]);

  return (
    <main className="NewTeacher">
      {editIme && (
        <>
          <h2>Editiraj Radionicu</h2>
          <form className="newTeacherForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="predavacIme">Ime:</label>
            <input
              id="predavacIme"
              type="text"
              required
              value={editIme}
              onChange={(e) => setEditIme(e.target.value)}
            />
            <label htmlFor="predavacBiografija">Biografija:</label>
            <textarea
              id="predavacBiografija"
              required
              value={editBiografija}
              onChange={(e) => setEditBiografija(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(predavac.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editIme && (
        <>
          <h2>Post Not Found</h2>
          <p>
            <Link to="/">Otidji na naslovnicu</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditCourse;
