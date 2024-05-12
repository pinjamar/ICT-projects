import { useState } from 'react';

const MinerModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClick = () => {
    setModalVisible(true);
  };
  const handleCloseClick = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div onClick={handleModalClick}>MINER</div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pojašnjenje miner podataka:</h2>
            <p>
              <span>TH5s</span> - hashrate u zadnjih 5s
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
            <p>w - trenutna snaga minera</p>
            <p>
              <span>s</span> - stanje minera (10 - OK, 20 - gubitak hashratea,
              30 - upozorenje, 40 - manji problemi, 50 - veći problemi, 60 -
              stanje kritično, boje možete kopirati kao gore ili mapirat
              proizvoljno)
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

export default MinerModal;
