import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Wardrobe from './components/Wardrobe';
import NewClothes from './components/NewClothes';

function App() {
  const [odjeca, postaviOdjecu] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMaximized(isMaximized);
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsMinimized(false);
    setIsMaximized(false);
    setIsOpen(false);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/odjeca/')
      .then((res) => postaviOdjecu(res.data));
  }, []);

  return (
    <div
      className={`tab ${isMaximized ? 'maximized' : ''} ${
        isMinimized ? 'minimized' : ''
      }`}
    >
      <div className="tab-header">
        <div className="tab-actions">
          <button onClick={handleMinimize}>-</button>
          <button onClick={handleMaximize}>□</button>
          <button onClick={handleClose}>X</button>
        </div>
      </div>
      {!isMinimized && isOpen && (
        <div className="tab-content">
          <div className="App">
            <h2 className="main-title">Moja garderoba</h2>
            <div className="main-elements">
              <NewClothes />
              <Wardrobe odjeca={odjeca} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
