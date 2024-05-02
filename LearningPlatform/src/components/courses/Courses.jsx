import { useEffect } from 'react';
import CourseCard from './CourseCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import DifficultyFilter from '../common/filters/DifficultyFilter';
import { Link } from 'react-router-dom';
import './courses.css';

import { radionice } from '../../../data';
import { useState } from 'react';
import NewCourse from '../utils/NewCourse';

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
      {/* <Link to="/radionice/1"> */}
      <button className="add-course">+ Dodaj novu radionicu</button>
      {/* </Link> */}
      <div className="courses-page">
        <div className="filters">
          <ThemeFilter onThemeChange={onThemeChange} />
          <DifficultyFilter onDifChange={onDifChange} />
        </div>
        <div className="container grid2">
          {courses.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </div>
      <div>
        <NewCourse />
      </div>
    </section>
  );
};

export default Workshops;
