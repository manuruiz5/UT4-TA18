import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx'; 

const ThemeStyle = () => {
  const { theme, themeStyle } = useContext(ThemeContext); 

  return (
    <div>
      <button onClick={themeStyle}>
        Cambiar a {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};

export default ThemeStyle;
