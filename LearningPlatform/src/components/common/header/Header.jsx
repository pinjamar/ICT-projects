import { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import './header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? 'mobile-nav' : 'flexSB '}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Naslovna</Link>
            </li>
            <li>
              <Link to="/radionice">Radionice</Link>
            </li>
            <li>
              <Link to="/predavaci">Predavaci</Link>
            </li>
            <li>
              <Link to="/admin">Administracija</Link>
            </li>
          </ul>
          <div className="admin-toggle-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={handleToggleAdmin}
              />
              <span className="slider round"></span>
            </label>
            <p className="admin-text">{isAdmin ? 'Admin' : 'User'}</p>
          </div>
          <div className="start">
            <div className="button">STEKNITE CERTIFIKAT</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
