/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types'; // ES6
import EditCourse from '../utils/EditCourse';
import CourseApply from '../common/modals/CourseApply';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
  const { cover, ime, opis, predavac } = props.course;

  const handleButtonClick = () => {
    console.log('clicked');
  };

  return (
    <div className="coursesCard">
      <div className="items">
        <div className="content flex">
          <div className="left">
            <div className="img">
              <img src={cover} alt="" />
            </div>
          </div>
          <div className="text">
            <h1>{ime}</h1>
            <div className="details">
              <p>{opis}</p>
              <h4>Predavač: {predavac}</h4>
            </div>
            <div className="courses-buttons">
              <button className="course-btn-apply" onClick={handleButtonClick}>
                <CourseApply />
              </button>
              <Link to="/admin">
                <button className="course-btn-edit">
                  <EditCourse />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    cover: PropTypes.string,
    ime: PropTypes.string,
    opis: PropTypes.string,
    predavac: PropTypes.array,
  }),
};

export default CourseCard;
