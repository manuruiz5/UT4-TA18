import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext.jsx';
import styles from './LanguageComponent.module.css'; 
const LanguageComponent = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); 

  return (
    <div className={language === 'español' ? styles.spanish : styles.english}>
    <h2>El idioma actual es: {language === 'español' ? 'Español' : 'English'}</h2>
    <button onClick={toggleLanguage}>
      Cambiar Idioma
    </button>
  </div>
);
};
export default LanguageComponent;
