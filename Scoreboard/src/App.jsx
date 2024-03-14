import './App.css';
import roma from './assets/roma.svg';
import milan from './assets/milan.svg';

import Header from './components/Header';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="board">
      <Header />
      <div className="results">
        <div className="home home-bg">
          <img src={milan} alt="" />
          <h1>Milan</h1>
          <button className="btn-score home-btn hbtn1">+1</button>
          <button className="btn-score home-btn hbtn2">+2</button>
          <button className="btn-score home-btn hbtn3">+3</button>
        </div>
        <div className="score">
          <div className="home-score">
            <h2 className="score h-score">0</h2>
          </div>
          <div className="guest-score">
            <h2 className="score g-score">0</h2>
          </div>
        </div>
        <div className="guest guest-bg">
          <img src={roma} alt="" />
          <h1>Roma</h1>
          <button className="btn-score away-btn abtn1">+1</button>
          <button className="btn-score away-btn abtn2">+2</button>
          <button className="btn-score away-btn abtn3">+3</button>
        </div>
      </div>
      <p className="mess"></p>
      <div className="btns-container">
        <button className="new-btn btns">New Game</button>
        <button className="end-btn btns">End Game</button>
      </div>
      <Statistics />
    </div>
  );
}

export default App;
