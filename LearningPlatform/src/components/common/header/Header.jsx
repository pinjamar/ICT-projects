import { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import { AdminProvider } from './AdminContext';
import { useAdmin, useAdminUpdate } from './AdminContext';
import './header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const admin = useAdmin();
  const adminUpdate = useAdminUpdate();

  return (
    <AdminProvider>
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
          <button onClick={adminUpdate}>TEST</button>
        </nav>
      </header>
    </AdminProvider>
  );
};

export default Header;
