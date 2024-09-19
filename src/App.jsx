 import { ThemeProvider } from './components/ThemeContext/ThemeContext.jsx'; 
import ThemeStyle from './components/ThemeStyle/ThemeStyle.jsx'; 
import ThemedComponent from './components/ThemedComponent/ThemedComponent.jsx'; 
import { LanguageProvider } from './components/LanguageContext/LanguageContext.jsx';
import LanguageComponent from './components/LanguageComponent/LanguageComponent.jsx';
const App = () => {
  return (
    <ThemeProvider> 
        <LanguageProvider>
      <div style={{ textAlign: 'center' }}>
        <ThemeStyle /> 
        <ThemedComponent /> 
        <LanguageComponent/>
       
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
