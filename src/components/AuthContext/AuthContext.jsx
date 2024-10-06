import  { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simula que no está autenticado inicialmente

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Definir PropTypes para AuthProvider
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // children es requerido y debe ser un nodo de React
  };
  
export const useAuth = () => useContext(AuthContext);
