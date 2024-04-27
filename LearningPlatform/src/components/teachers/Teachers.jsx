import TeacherCard from './TeacherCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import OrganizationFilter from '../common/filters/OrganizationFilter';
import './teachers.css';

import { predavaci } from '../../../data';
import { useState } from 'react';

const Team = () => {
  const [teachers, setTeachers] = useState(predavaci)

  const onOrgChange = (newOrg) => {
    let filteredTeachers = predavaci;
    if (newOrg) {
      filteredTeachers = predavaci.filter(e => e.organizacija === newOrg)
    } 
    setTeachers(filteredTeachers)
  }

  return (
    <section className="team padding">
      <button>+ Dodaj novog predavaca</button>
      <div className="teachers-page">
        <div className="filters">
          <ThemeFilter />
          <OrganizationFilter onOrgChange={onOrgChange} />
        </div>
        <div className="container grid">
          {teachers.map(item => (
            <TeacherCard key={item.id} teacher={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
