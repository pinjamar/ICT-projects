import TeacherCard from './TeacherCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import OrganizationFilter from '../common/filters/OrganizationFilter';
import './teachers.css';

const Team = () => {
  return (
    <section className="team padding">
      <button>+ Dodaj novog predavaca</button>
      <div className="teachers-page">
        <div className="filters">
          <ThemeFilter />
          <OrganizationFilter />
        </div>
        <div className="container grid">
          <TeacherCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
