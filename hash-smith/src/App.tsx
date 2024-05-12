import './App.css';
import SmallContainer from './components/SmallContainer';
import BigContainer from './components/BigContainer';

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
    </>
  );
}

export default App;
