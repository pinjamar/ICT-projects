import './App.css';
import SmallContainer from './components/SmallContainer';
import BigContainer from './components/BigContainer';
import MinerModal from './components/MinerModal';

function App() {
  return (
    <>
      <div className="small-containers-group">
        <SmallContainer />
        <SmallContainer />
        <SmallContainer />
      </div>
      <div className="big-containers-group-one">
        <BigContainer />
        <BigContainer />
        <BigContainer />
      </div>
      <div className="big-containers-group-two">
        <BigContainer />
        <BigContainer />
        <BigContainer />
      </div>
      <MinerModal />
    </>
  );
}

export default App;
