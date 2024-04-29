import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Teachers from './components/teachers/Teachers';
import Admin from './components/admin/Admin';
import AdminOrganizations from './components/admin/AdminOrganizations';
import AdminTeachers from './components/admin/AdminTeachers';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
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
