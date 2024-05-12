import Data from '../../miners.json';
import MinerModal from './MinerModal';
import './containers.css';

const FirstContainer = () => {
  return (
    <div className="small-container">
      <div className="small-first-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 1)
              return (
                <div className="miner" key={idx}>
                  <div className="modal-button">
                    <MinerModal />
                  </div>
                  {miner.port}
                </div>
              );
          })
          .slice(0, 4)}
      </div>
      <div className="small-second-row">
        {Data[19].values
          .map((miner, idx) => {
            if (miner.pdu == 1)
              return (
                <div className="miner" key={idx}>
                  {miner.port}
                </div>
              );
          })
          .slice(4, 13)}
      </div>
    </div>
  );
};

export default FirstContainer;
