import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <div>
      <Link to="/admin">Radionice</Link>
      <Link to="/admin/organizacije">Organizacije</Link>
      <Link to="/admin/predavaci">Predavači</Link>
      <button>+Dodaj</button>
    </div>
  );
};

export default AdminHeader;
