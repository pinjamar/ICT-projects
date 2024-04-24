import TeacherCard from './TeacherCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import OrganizationFilter from '../common/filters/OrganizationFilter';
import './teachers.css';

const Team = () => {
  return (
    <section className="team padding">
      <div>
        <ThemeFilter />
        <OrganizationFilter />
      </div>
      <div className="container grid">
        <TeacherCard />
      </div>
    </section>
  );
};

export default Team;
