import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// Creamos el contexto del usuario
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Manuela Ruiz'); // Estado del nombre del usuario

  return (
    <UserContext.Provider value={{userName, setUserName}}>
      {children} 
    </UserContext.Provider>
  );
};

// Validación de Props
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
