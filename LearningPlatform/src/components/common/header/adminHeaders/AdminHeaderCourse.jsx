import { Link } from 'react-router-dom';
import '../header.css';

const AdminHeaderCourse = () => {
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
      <button className="admin-btn">+Dodaj novu radionicu</button>
    </div>
  );
};

export default AdminHeaderCourse;
