import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx'; 
import styles from './ThemedComponent.module.css'; 

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div className={theme === 'light' ? styles.light : styles.dark}>
      <h1>Esto es con tema {theme === 'light' ? 'light' : 'dark'}</h1>
    </div>
  );
};

export default ThemedComponent;
