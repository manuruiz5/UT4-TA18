 import { ThemeProvider } from './components/ThemeContext/ThemeContext.jsx'; 
import ThemeStyle from './components/ThemeStyle/ThemeStyle.jsx'; 
import ThemedComponent from './components/ThemedComponent/ThemedComponent.jsx'; 
const App = () => {
  return (
    <ThemeProvider> 
      <div style={{ textAlign: 'center' }}>
        <ThemeStyle /> 
        <ThemedComponent /> 
      </div>
    </ThemeProvider>
  );
};

export default App;
