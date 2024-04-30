import './hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <h1 className="main-title">DOBRODOŠLI NA ACADEMIU</h1>
            <h2>Najbolja online edukacija na jednom mjestu</h2>
            <p>
              Daleko, daleko, iza rijeka i planina, daleko od zemalja Vokalija i
              Konsonantija, žive nevidljivi tekstovi i sveznajući profesori.
            </p>
            <div className="button">
              <button className="primary-btn">
                UPOZNAJTE PROFESORE{' '}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                POGLEDAJTE RADIONICE{' '}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
