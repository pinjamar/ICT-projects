import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Hero from './components/home/Hero';
import Courses from './components/courses/Courses';
import Teachers from './components/teachers/Teachers';
import Admin from './components/admin/AdminCourses';
import AdminOrganizations from './components/admin/AdminOrganizations';
import AdminTeachers from './components/admin/AdminTeachers';

import { predavaci, radionice, organizacije } from '../data';

import GenericService from './components/crud/GenericService';

const seedService = (serviceName, data) => {
  const service = new GenericService(serviceName);

  if (!service.hasData()) {
    data.forEach((element) => {
      delete element.id;
      service.save(element);
    });
  }
};

const Seed = () => {
  seedService('teachers', predavaci);
  seedService('courses', radionice);
  seedService('orgs', organizacije);
};

const App = () => {
  Seed();
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/radionice" component={Courses} />
        <Route path="/predavaci" component={Teachers} />
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
