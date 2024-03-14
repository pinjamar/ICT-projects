import { useState } from 'react';

const Statistics = () => {
  const [udarci, setUdarci] = useState(0);
  const [posjed, setPosjed] = useState(0);
  const [dodavanja, setDodavanja] = useState(0);
  const [prekrsaji, setPrekrsaji] = useState(0);
  const [korneri, setKorneri] = useState(0);
  const [zaledja, setZaledja] = useState(0);
  const [penali, setPenali] = useState(0);
  const [zuti, setZuti] = useState(0);
  const [crveni, setCrveni] = useState(0);

  return (
    <div className="stats">
      <div className="stats1">
        <div className="shots">
          <span>Udarci</span>
          <button
            onClick={() => {
              if (udarci > 0) {
                setUdarci(udarci - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{udarci}</h3>

          <button onClick={() => setUdarci(udarci + 1)} className="stat-btn">
            +
          </button>
        </div>
        <div className="possession">
          <span>Posjed</span>
          <button
            onClick={() => {
              if (posjed > 0) {
                setPosjed(posjed - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{posjed}</h3>
          <button onClick={() => setPosjed(posjed + 1)} className="stat-btn">
            +
          </button>
        </div>
        <div className="passes">
          <span>Dodavanja</span>
          <button
            onClick={() => {
              if (dodavanja > 0) {
                setDodavanja(dodavanja - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{dodavanja}</h3>

          <button
            onClick={() => setDodavanja(dodavanja + 1)}
            className="stat-btn"
          >
            +
          </button>
        </div>
      </div>
      <div className="stats2">
        <div className="fouls">
          <span>Prekrsaji</span>
          <button
            onClick={() => {
              if (prekrsaji > 0) {
                setPrekrsaji(prekrsaji - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{prekrsaji}</h3>

          <button
            onClick={() => setPrekrsaji(prekrsaji + 1)}
            className="stat-btn"
          >
            +
          </button>
        </div>
        <div className="corners">
          <span>Korneri</span>
          <button
            onClick={() => {
              if (korneri > 0) {
                setKorneri(korneri - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{korneri}</h3>
          <button onClick={() => setKorneri(korneri + 1)} className="stat-btn">
            +
          </button>
        </div>
        <div className="offsides">
          <span>Zaledja</span>
          <button
            onClick={() => {
              if (zaledja > 0) {
                setZaledja(zaledja - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{zaledja}</h3>
          <button onClick={() => setZaledja(zaledja + 1)} className="stat-btn">
            +
          </button>
        </div>
      </div>
      <div className="stats3">
        <div className="penalties">
          <span>Jedanaesterci</span>
          <button
            onClick={() => {
              if (penali > 0) {
                setPenali(penali - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{penali}</h3>
          <button onClick={() => setPenali(penali + 1)} className="stat-btn">
            +
          </button>
        </div>
        <div className="yellows">
          <span>Zuti kartoni</span>
          <button
            onClick={() => {
              if (zuti > 0) {
                setZuti(zuti - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{zuti}</h3>

          <button onClick={() => setZuti(zuti + 1)} className="stat-btn">
            +
          </button>
        </div>
        <div className="reds">
          <span>Crveni karton</span>
          <button
            onClick={() => {
              if (crveni > 0) {
                setCrveni(crveni - 1);
              }
            }}
            className="stat-btn"
          >
            -
          </button>
          <h3 className="score h-score">{crveni}</h3>

          <button onClick={() => setCrveni(crveni + 1)} className="stat-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
