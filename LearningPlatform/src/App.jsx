import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Hero from './components/home/Hero';
import Courses from './components/courses/Courses';
import Teachers from './components/teachers/Teachers';
import Admin from './components/admin/AdminCourses';
import AdminOrganizations from './components/admin/AdminOrganizations';
import AdminTeachers from './components/admin/AdminTeachers';
import NewTeacher from './components/utils/NewTeacher';
import NewCourse from './components/utils/NewCourse';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/radionice" component={Courses} />
        {/* <Route exact path="/radionice/1" component={NewCourse} /> */}
        <Route path="/predavaci" component={Teachers} />
        {/* <Route exact path="/predavaci/1" component={NewTeacher} /> */}
        <Route exact path="/admin" component={Admin} />
        <Route
          exact
          path="/admin/organizacije"
          component={AdminOrganizations}
        />
        <Route exact path="/admin/predavaci" component={AdminTeachers} />
      </Switch>
    </Router>
  );
};

export default App;
