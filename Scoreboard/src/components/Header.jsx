import { useState, useEffect } from 'react';

// const timeByAddingMinutes = (date, intMinutes) => {
//   return new Date(date.getTime() + intMinutes * 60000);
// };

const minutesSecondsFromDate = (date) => {
  var intervalSeconds = Math.floor((new Date() - date) / 1000);
  var minutes = Math.floor(intervalSeconds / 60);
  var seconds = intervalSeconds - minutes * 60;

  return {
    minutes: minutes,
    seconds: seconds,
  };
};

const Header = (props) => {
  const startDate = props.startDate;
  const [elapsedTime, setElapsedTime] = useState(
    minutesSecondsFromDate(startDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(minutesSecondsFromDate(startDate));
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [startDate]);

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
        {Object.entries(elapsedTime).map((el) => {
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
