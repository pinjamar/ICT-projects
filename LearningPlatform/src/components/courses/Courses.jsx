import CourseCard from './CourseCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import DifficultyFilter from '../common/filters/DifficultyFilter';
import './courses.css';

import { radionice } from '../../../data';
import { useState } from 'react';

const Workshops = () => {
  const [workshops, setWorkshops] = useState(radionice);

  const onDifChange = (newDif) => {
    let filteredWorkshops = radionice;
    if (newDif) {
      filteredWorkshops = radionice.filter((e) => e.tezina === newDif);
    }
    setWorkshops(filteredWorkshops);
  };
  return (
    <section className="team padding">
      <button>+ Dodaj novu radionicu</button>
      <div className="teachers-page">
        <div className="filters">
          <ThemeFilter />
          <DifficultyFilter onDifChange={onDifChange} />
        </div>
        <div className="container grid">
          {/* <CourseCard /> */}
          {workshops.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
