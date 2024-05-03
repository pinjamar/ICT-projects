import { Link } from 'react-router-dom';
import NewTeacher from '../../../utils/NewTeacher';
import '../header.css';

const AdminHeaderCourse = (props) => {

  const { reload } = props

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
      <NewTeacher reload={reload} />
    </div>
  );
};

export default AdminHeaderCourse;
