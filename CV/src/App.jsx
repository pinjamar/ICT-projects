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
        <Info question="Datum rođenja:" answer="26. veljače, 1989." />
        <Info question="Adresa:" answer="Iločka 21, Split" />
        <Info question="Kontakt:" answer="github.com/pinjamar" />
      </Card>
      <Card title="Sposobnosti">
        <Skills skill="Detektivske vještine:" percentage="100" />
        <Skills skill="Borilačke vještine:" percentage="90" width="90" />
        <Skills skill="JavaScript:" percentage="77" width="77" />
      </Card>
    </div>
  );
}

export default App;
