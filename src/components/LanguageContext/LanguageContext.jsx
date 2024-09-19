import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Crear el contexto para el idioma
export const LanguageContext = createContext();

// Proveedor del contexto de idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('español'); // Estado del idioma 

  const toggleLanguage = () => {
    setLanguage(language === 'español' ? 'english' : 'español'); // Alterna entre español e inglés
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Validación de Props
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
