import { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import ThemeFilter from '../common/filters/ThemeFilter';
import DifficultyFilter from '../common/filters/DifficultyFilter';
import NewCourse from '../utils/NewCourse';
import { useCourses } from '../crud/serviceHooks';
import './courses.css';

const Workshops = () => {
  const courseService = useCourses();

  const [courses, setCourses] = useState(courseService.getAll());

  const [themeFilter, setThemeFilter] = useState(null);
  const [difFilter, setDifFilter] = useState(null);

  const onDifChange = (newOrg) => {
    setDifFilter(newOrg);
  };

  const onThemeChange = (newTheme) => {
    setThemeFilter(newTheme);
  };

  const doFilter = () => {
    let filteredCourses = courseService.getAll();
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

  useEffect(doFilter, [themeFilter, difFilter, courseService]);
  return (
    <section className="course padding">
      <button className="add-course">
        <NewCourse />
      </button>
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
    </section>
  );
};

export default Workshops;
