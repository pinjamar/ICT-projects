/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types'; // ES6

const CourseCard = (props) => {
  const { cover, ime, opis, predavac, broj_prijava } = props.course;
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
                <h2>{ime}</h2>
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
                  <h1>{predavac}</h1>
                  <p>Broj studenata: {broj_prijava}</p>
                </div>
              </div>
            </div>
            <button className="outline-btn">Prijavi se!</button>
            <button className="outline-btn">Uredi</button>
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
    opis: PropTypes.string,
    predavac: PropTypes.array,
    broj_prijava: PropTypes.number,
  }),
};

export default CourseCard;
