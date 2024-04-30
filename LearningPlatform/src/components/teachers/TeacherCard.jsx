/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'; // ES6

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
        <h5>Organizacija: {organizacija}</h5>
        <h6>Teme: {tema}</h6>
        {tema.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
      <button>Pregledaj radionice</button>
      <button className="admin-button edit-teacher">Uredi</button>
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
