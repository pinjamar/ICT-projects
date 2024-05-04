/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

const AdminContext = React.createContext();
const AdminUpdateContext = React.createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export function useAdminUpdate() {
  return useContext(AdminUpdateContext);
}

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <AdminContext.Provider value={isAdmin}>
      <AdminUpdateContext.Provider value={handleToggleAdmin}>
        {children}
      </AdminUpdateContext.Provider>
    </AdminContext.Provider>
  );
}
