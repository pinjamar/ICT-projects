/* eslint-disable no-undef */
import TeacherCard from './TeacherCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import OrganizationFilter from '../common/filters/OrganizationFilter';
import { useEffect } from 'react';
import NewTeacher from '../utils/NewTeacher';
import './teachers.css';

import { predavaci } from '../../../data';
import { useState } from 'react';

const Team = () => {
  const [teachers, setTeachers] = useState(predavaci);
  const [themeFilter, setThemeFilter] = useState(null);
  const [orgFilter, setOrgFilter] = useState(null);

  const onOrgChange = (newOrg) => {
    setOrgFilter(newOrg);
  };

  const onThemeChange = (newTheme) => {
    setThemeFilter(newTheme);
  };

  const doFilter = () => {
    let filteredTeachers = predavaci;
    if (orgFilter) {
      filteredTeachers = filteredTeachers.filter(
        (e) => e.organizacija === orgFilter
      );
    }

    if (themeFilter) {
      filteredTeachers = filteredTeachers.filter((e) =>
        e.tema.includes(themeFilter)
      );
    }

    setTeachers(filteredTeachers);
  };

  useEffect(doFilter, [themeFilter, orgFilter]);

  return (
    <section className="team padding">
      <button className="admin-button add-teacher">
        <NewTeacher />
      </button>
      <div className="teachers-page">
        <div className="filters">
          <ThemeFilter onThemeChange={onThemeChange} />
          <OrganizationFilter onOrgChange={onOrgChange} />
        </div>
        <div className="container grid">
          {teachers.map((item) => (
            <TeacherCard key={item.id} teacher={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
