import Data from '../../miners.json';
import './containers.css';

const ThirdContainer = () => {
  return (
    <div className="small-container">
      <div className="small-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 3)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(35, 40)}
      </div>
      <div className="small-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 3)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(40, 49)}
      </div>
    </div>
  );
};

export default ThirdContainer;
