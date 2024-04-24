import CourseCard from './CourseCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import DifficultyFilter from '../common/filters/DifficultyFilter';
import './courses.css';

const Workshops = () => {
  return (
    <section className="team padding">
      <button>+ Dodaj novu radionicu</button>
      <div className="teachers-page">
        <div className="filters">
          <ThemeFilter />
          <DifficultyFilter />
        </div>
        <div className="container grid">
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default Workshops;
