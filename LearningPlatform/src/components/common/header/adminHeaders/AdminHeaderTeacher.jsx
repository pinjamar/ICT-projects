import { Link } from 'react-router-dom';
import NewTeacher from '../../../utils/NewTeacher';
import '../header.css';

const AdminHeaderCourse = (props) => {
  // eslint-disable-next-line react/prop-types
  const { reload } = props;
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
      <button className="admin-btn">
        <NewTeacher reload={reload} />
      </button>
    </div>
  );
};

export default AdminHeaderCourse;
