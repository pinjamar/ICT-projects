/* eslint-disable react/jsx-key */
import './courses.css';
import { radionice } from '../../../data';

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {radionice.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.ime}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    <p>{val.opis}</p>
                    <h1>{val.datum}</h1>
                    <h1>{val.predavac}</h1>
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className="outline-btn">ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
