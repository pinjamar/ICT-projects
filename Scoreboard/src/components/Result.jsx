import { useState } from 'react';

const Result = () => {
  const [golDomaci, promjenaDomaci] = useState(0);
  const [golGosti, promjenaGosti] = useState(0);

  function reset() {
    promjenaDomaci(0);
    promjenaGosti(0);
  }
  return (
    <div className="score-wrapper">
      <div className="score">
        <div className="home-score">
          <button onClick={() => promjenaDomaci(golDomaci + 1)}>+</button>
          <h2 className="score h-score">{golDomaci}</h2>
          <button
            onClick={() => {
              if (golDomaci > 0) {
                promjenaDomaci(golDomaci - 1);
              }
            }}
          >
            -
          </button>
        </div>
        <span style={{ fontSize: '30px', alignSelf: 'center' }}>:</span>
        <div className="guest-score">
          <button
            onClick={() => {
              promjenaGosti(golGosti + 1);
            }}
          >
            +
          </button>
          <h2 className="score g-score">{golGosti}</h2>
          <button
            onClick={() => {
              if (golGosti > 0) {
                promjenaGosti(golGosti - 1);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
      <button
        onClick={() => reset()}
        style={{ width: '100%', fontSize: '20px', marginTop: '20px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
