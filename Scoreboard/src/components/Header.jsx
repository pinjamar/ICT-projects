import { useState, useEffect } from 'react';

const getTimeLeft = () => {
  const totalTimeLeft = 5400000;
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { minutes, seconds };
};

const Header = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header>
      <h2>Rezultat</h2>
      <div
        className="content"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div
              className="box"
              key={label}
              style={{ display: 'flex', margin: '0 5px' }}
            >
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label">{label[0]}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
