import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Creamos el contexto del tema
export const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado inicial light

  // Función para alternar el tema
  const themeStyle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, themeStyle }}>
      {children} 
    </ThemeContext.Provider>
  );
};

// Validación de Props
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
