/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'; // ES6
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import EditTeacher from '../utils/EditTeacher';

const TeacherCard = (props) => {
  const { cover, ime, biografija, organizacija, tema } = props.teacher;

  return (
    <div className="items shadow">
      <div className="img">
        <img src={cover} alt="" />
        <div className="overlay">
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-tiktok icon"></i>
        </div>
      </div>
      <div className="details">
        <h2>{ime}</h2>
        <p>{biografija}</p>
        <p className="teacher-organization">
          <span className="organization-title">Organizacija:</span>{' '}
          {organizacija}
        </p>
        <div className="fragment">
          <p className="themes">Teme:</p>
          {tema.map((item, idx) => (
            <Fragment>
              <p key={idx}>{item}</p>
              {idx !== tema.length - 1 && <span>, </span>}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="teacher-buttons">
        <Link to="/radionice">
          <button className="teacher-courses">Pregledaj radionice</button>
        </Link>
        <button className="edit-teacher">
          <EditTeacher />
        </button>
      </div>
    </div>
  );
};

TeacherCard.propTypes = {
  teacher: PropTypes.shape({
    cover: PropTypes.string,
    ime: PropTypes.string,
    biografija: PropTypes.string,
    organizacija: PropTypes.string,
    tema: PropTypes.array,
  }),
};

export default TeacherCard;
