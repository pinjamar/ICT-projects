import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Teachers from './components/teachers/Teachers';
import Admin from './components/admin/Admin';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/radionice" component={Courses} />
        <Route exact path="/predavaci" component={Teachers} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
