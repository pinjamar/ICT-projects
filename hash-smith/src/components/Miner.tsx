/* eslint-disable @typescript-eslint/no-explicit-any */
import MinerModal from './MinerModal';
import '../../miners.json';

const Miner = (props: any) => {
  const { miner } = props;
  return (
    <div className="miner">
      <div className="modal-button">
        <MinerModal />
      </div>
      {miner.port}
    </div>
  );
};

export default Miner;
