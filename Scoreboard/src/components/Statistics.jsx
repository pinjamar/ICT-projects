const Statistics = (props) => {
  const udarci = props.udarci;
  const setUdarci = props.setUdarci;
  const posjed = props.posjed;
  const setPosjed = props.setPosjed;
  const dodavanja = props.dodavanja;
  const setDodavanja = props.setDodavanja;
  const prekrsaji = props.prekrsaji;
  const setPrekrsaji = props.setPrekrsaji;
  const korneri = props.korneri;
  const setKorneri = props.setKorneri;
  const zaledja = props.zaledja;
  const setZaledja = props.setZaledja;
  const penali = props.penali;
  const setPenali = props.setPenali;
  const zuti = props.zuti;
  const setZuti = props.setZuti;
  const crveni = props.crveni;
  const setCrveni = props.setCrveni;

  return (
    <div className="stats">
      <div className="stats1">
        <div className="shots stat-field">
          <span>Udarci</span>
          <div className="stat-number">
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
        </div>
        <div className="possession stat-field">
          <span>Posjed</span>
          <div className="stat-number">
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
        </div>
        <div className="passes stat-field">
          <span>Dodavanja</span>
          <div className="stat-number">
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
      </div>
      <div className="stats2">
        <div className="fouls stat-field">
          <span>Prekrsaji</span>
          <div className="stat-number">
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
        </div>
        <div className="corners stat-field">
          <span>Korneri</span>
          <div className="stat-number">
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
            <button
              onClick={() => setKorneri(korneri + 1)}
              className="stat-btn"
            >
              +
            </button>
          </div>
        </div>
        <div className="offsides stat-field">
          <span>Zaledja</span>
          <div className="stat-number">
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
            <button
              onClick={() => setZaledja(zaledja + 1)}
              className="stat-btn"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="stats3">
        <div className="penalties stat-field">
          <span>Jedanaesterci</span>
          <div className="stat-number">
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
        </div>
        <div className="yellows stat-field">
          <span>Zuti kartoni</span>
          <div className="stat-number">
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
        </div>
        <div className="reds stat-field">
          <span>Crveni karton</span>
          <div className="stat-number">
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
    </div>
  );
};

export default Statistics;
