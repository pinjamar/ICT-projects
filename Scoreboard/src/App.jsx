import './App.css';
import { useState } from 'react';
import roma from './assets/roma.svg';
import milan from './assets/milan.svg';

import Header from './components/Header';
import Result from './components/Result';
import Statistics from './components/Statistics';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [golDomaci, setGolDomaci] = useState(0);
  const [golGosti, setGolGosti] = useState(0);
  const [golovi, setGolovi] = useState([]);
  const [udarci, setUdarci] = useState(0);
  const [posjed, setPosjed] = useState(0);
  const [dodavanja, setDodavanja] = useState(0);
  const [prekrsaji, setPrekrsaji] = useState(0);
  const [korneri, setKorneri] = useState(0);
  const [zaledja, setZaledja] = useState(0);
  const [penali, setPenali] = useState(0);
  const [zuti, setZuti] = useState(0);
  const [crveni, setCrveni] = useState(0);

  const minutesSecondsFromDate = (startDate, currentDate) => {
    var intervalSeconds = Math.floor((currentDate - startDate) / 1000);
    return Math.ceil(intervalSeconds / 60);
  };

  function promjenaDomaci(noviDomaciGol) {
    setGolDomaci(noviDomaciGol);

    setGolovi([
      {
        golDomaci: noviDomaciGol,
        golGosti: golGosti,
        datum: new Date(),
      },
      ...golovi,
    ]);
    console.log(golovi);
  }

  function promjenaGosti(noviGostiGol) {
    setGolGosti(noviGostiGol);

    setGolovi([
      {
        golDomaci: golDomaci,
        golGosti: noviGostiGol,
        datum: new Date(),
      },
      ...golovi,
    ]);
    console.log(golovi);
  }

  function reset() {
    setStartDate(new Date());
    setGolDomaci(0);
    setGolGosti(0);
    setGolovi([]);
    setUdarci(0);
    setPosjed(0);
    setDodavanja(0);
    setPrekrsaji(0);
    setKorneri(0);
    setZaledja(0);
    setPenali(0);
    setZuti(0);
    setCrveni(0);
  }
  return (
    <div className="board">
      <Header startDate={startDate} />
      <div className="results">
        <div className="home home-bg">
          <img src={milan} alt="" />
          <h1>AC Milan</h1>
        </div>
        <Result
          golDomaci={golDomaci}
          golGosti={golGosti}
          promjenaDomaci={promjenaDomaci}
          promjenaGosti={promjenaGosti}
          reset={reset}
        />
        <div className="guest guest-bg">
          <img src={roma} alt="" />
          <h1>AS Roma</h1>
        </div>
      </div>

      {golovi.map((gol, index) => {
        return (
          <div key={index}>
            {gol.golDomaci}:{gol.golGosti} -
            {minutesSecondsFromDate(startDate, gol.datum)}&apos; min
          </div>
        );
      })}
      <Statistics
        udarci={udarci}
        setUdarci={setUdarci}
        posjed={posjed}
        setPosjed={setPosjed}
        dodavanja={dodavanja}
        setDodavanja={setDodavanja}
        prekrsaji={prekrsaji}
        setPrekrsaji={setPrekrsaji}
        korneri={korneri}
        setKorneri={setKorneri}
        zaledja={zaledja}
        setZaledja={setZaledja}
        penali={penali}
        setPenali={setPenali}
        zuti={zuti}
        setZuti={setZuti}
        crveni={crveni}
        setCrveni={setCrveni}
      />
    </div>
  );
}

export default App;
