import profilePicture from './assets/profilepic.jpg';
import './App.css';
import Card from './components/Card';
import Skills from './components/Skills';
import Info from './components/Info';

function App() {
  return (
    <div className="bg">
      <h1 className="title">
        <span className="name">Ivan</span> Pirija
      </h1>
      <img src={profilePicture} className="profile" alt="" />
      <Card title="Opći podaci">
        <Info question="pitranje" answer="odgobor" />
        <Info question="pitranje" answer="odgobor" />
        <Info question="pitranje" answer="odgobor" />
      </Card>
      <Card title="Sposobnosti">
        <Skills skill="Detektivske vještine:" />
        <Skills skill="Borilačke vještine:" />
        <Skills skill="JavaScript:" />
      </Card>
    </div>
  );
}

export default App;
