/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Data from '../../miners.json';

interface Miner {
  TH5s: number;
  THAvg: number;
  tB: number;
  freq: number;
  w: number;
  s: number;
  pdu: number;
  port: number;
}

const MinerModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [minerHash] = Data[19].values.map((value) => value.TH5s);
  const [minerColor] = Data[19].values.map((value) => value.s);

  const handleModalClick = () => {
    setModalVisible(true);
  };
  const handleCloseClick = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div onClick={handleModalClick} className="modal-open">
        &nbsp;
      </div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pojašnjenje miner podataka:</h2>
            <p>
              <span>{minerHash}</span> - hashrate u zadnjih 5s
            </p>
            <p>
              <span>THAvg</span> - prosječan hashrate kroz zadnjih sat vremena
            </p>
            <p>
              <span>tB</span> - temperatura pločice minera
            </p>
            <p>
              <span>freq</span> - frekvencija
            </p>
            <p>
              <span>w </span>- trenutna snaga minera
            </p>
            <p>
              <span>{minerColor}</span> - stanje minera (10 - OK, 20 - gubitak
              hashratea, 30 - upozorenje, 40 - manji problemi, 50 - veći
              problemi, 60 - stanje kritično)
            </p>
            <p>
              <span>pdu</span> - grupa
            </p>
            <p>
              <span>port</span> - redni broj unutar grupe
            </p>
            <button
              type="button"
              onClick={handleCloseClick}
              className="close-button"
            >
              Close &#10006;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// MinerModal.propTypes = {
//   miner: PropTypes.shape({
//     TH5s: PropTypes.number,
//   }),
// };

export default MinerModal;
