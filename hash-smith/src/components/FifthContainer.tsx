import Data from '../../miners.json';
import './containers.css';

const FifthContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 5)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(72, 81)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 5)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(81, 90)}
      </div>
    </div>
  );
};

export default FifthContainer;
