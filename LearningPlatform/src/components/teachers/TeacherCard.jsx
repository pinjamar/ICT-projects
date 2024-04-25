/* eslint-disable react/jsx-key */
import { predavaci } from '../../../data';

const TeacherCard = () => {
  return (
    <>
      {predavaci.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          <div className="details">
            <h2>{val.ime}</h2>
            <p>{val.biografija}</p>
            <h5>Organizacija: {val.organizacija}</h5>
            <h6>Teme: {val.tema}</h6>
            {val.tema.map((item) => (
              <>
                <p>{item}</p>
              </>
            ))}
          </div>
          <button>Pregledaj radionice</button>
          <button>Uredi</button>
        </div>
      ))}
    </>
  );
};

export default TeacherCard;
