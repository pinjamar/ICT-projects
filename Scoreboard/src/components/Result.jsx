const Result = (props) => {
  const golDomaci = props.golDomaci;
  const golGosti = props.golGosti;
  const promjenaDomaci = props.promjenaDomaci;
  const promjenaGosti = props.promjenaGosti;

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
        onClick={() => props.reset()}
        style={{ width: '100%', fontSize: '20px', marginTop: '20px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
