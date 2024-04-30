import { useEffect } from 'react';
import CourseCard from './CourseCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import DifficultyFilter from '../common/filters/DifficultyFilter';
import './courses.css';

import { radionice } from '../../../data';
import { useState } from 'react';

const Workshops = () => {
  const [courses, setCourses] = useState(radionice);

  const [themeFilter, setThemeFilter] = useState(null);
  const [difFilter, setDifFilter] = useState(null);

  const onDifChange = (newOrg) => {
    setDifFilter(newOrg);
  };

  const onThemeChange = (newTheme) => {
    setThemeFilter(newTheme);
  };

  const doFilter = () => {
    let filteredCourses = radionice;
    if (difFilter) {
      filteredCourses = filteredCourses.filter((e) => e.tezina === difFilter);
    }

    if (themeFilter) {
      filteredCourses = filteredCourses.filter((e) =>
        e.tema.includes(themeFilter)
      );
    }

    setCourses(filteredCourses);
  };

  useEffect(doFilter, [themeFilter, difFilter]);
  return (
    <section className="course padding">
      <button>+ Dodaj novu radionicu</button>
      <div className="courses-page">
        <div className="filters">
          <ThemeFilter onThemeChange={onThemeChange} />
          <DifficultyFilter onDifChange={onDifChange} />
        </div>
        <div className="container grid">
          {courses.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
