import Back from '../common/back/Back';
import TeacherCard from './TeacherCard';
import './teachers.css';

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeacherCard />
        </div>
      </section>
    </>
  );
};

export default Team;
