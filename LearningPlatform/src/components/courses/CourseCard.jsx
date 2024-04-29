/* eslint-disable react/jsx-key */
// import './courses.css';
import PropTypes from 'prop-types'; // ES6

const CourseCard = (props) => {
  const { cover, ime, datum, opis, predavac } = props.course;
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          <div className="items">
            <div className="content flex">
              <div className="left">
                <div className="img">
                  <img src={cover} alt="" />
                </div>
              </div>
              <div className="text">
                <h1>{ime}</h1>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <label htmlFor="">(5.0)</label>
                </div>
                <div className="details">
                  <p>{opis}</p>
                  <h1>{datum}</h1>
                  <h1>{predavac}</h1>
                </div>
              </div>
            </div>
            <button className="outline-btn">ENROLL NOW !</button>
          </div>
        </div>
      </section>
    </>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    cover: PropTypes.string,
    ime: PropTypes.string,
    datum: PropTypes.string,
    opis: PropTypes.string,
    predavac: PropTypes.array,
  }),
};

export default CourseCard;
