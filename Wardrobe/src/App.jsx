import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Wardrobe from './components/Wardrobe';

function App() {
  const [odjeca, postaviOdjecu] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/odjeca/')
      .then((res) => postaviOdjecu(res.data));
  }, []);
  return (
    <div className="App">
      <h1>Moja garderoba</h1>
      <Wardrobe odjeca={odjeca} />
    </div>
  );
}

export default App;
