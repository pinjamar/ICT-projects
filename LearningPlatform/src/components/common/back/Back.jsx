import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Back = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className="back">
        <h2>Home / {location.pathname.split('/')[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
