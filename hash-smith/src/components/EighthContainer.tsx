import Data from '../../miners.json';
import './containers.css';

const EighthContainer = () => {
  return (
    <div className="big-container">
      <div className="big-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 8)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(126, 135)}
      </div>
      <div className="big-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 8)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(135, 144)}
      </div>
    </div>
  );
};

export default EighthContainer;
