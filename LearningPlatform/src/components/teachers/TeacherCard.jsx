/* eslint-disable react/jsx-key */
import { predavaci } from '../../data';

const TeacherCard = () => {
  return (
    <>
      {predavaci.map((val) => (
        <div className="items shadow">
          <div className="img">
            <div className="overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          <div className="details">
            <h2>{val.predavaci.ime}</h2>
            <p>{val.predavaci.biografija}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeacherCard;
