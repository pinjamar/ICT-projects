import { Link } from 'react-router-dom';
import './header.css';

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <ul>
        <li>
          <Link to="/admin">Radionice</Link>
        </li>
        <li>
          <Link to="/admin/organizacije">Organizacije</Link>
        </li>
        <li>
          <Link to="/admin/predavaci">Predavači</Link>
        </li>
      </ul>
      <button className="admin-header-button">+Dodaj</button>
    </div>
  );
};

export default AdminHeader;
