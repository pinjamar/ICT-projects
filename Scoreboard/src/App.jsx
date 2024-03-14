import './App.css';
import roma from './assets/roma.svg';
import milan from './assets/milan.svg';

import Header from './components/Header';
import Result from './components/Result';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="board">
      <Header />
      <div className="results">
        <div className="home home-bg">
          <img src={milan} alt="" />
          <h1>AC Milan</h1>
        </div>
        <Result />
        <div className="guest guest-bg">
          <img src={roma} alt="" />
          <h1>AS Roma</h1>
        </div>
      </div>
      <Statistics />
    </div>
  );
}

export default App;
