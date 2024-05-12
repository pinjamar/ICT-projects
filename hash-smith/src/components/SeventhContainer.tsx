import Data from '../../miners.json';
import './containers.css';

const SeventhContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 7)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(108, 117)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 7)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(117, 126)}
      </div>
    </div>
  );
};

export default SeventhContainer;
