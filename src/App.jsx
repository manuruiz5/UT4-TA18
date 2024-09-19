import { UserProvider } from './components/UserContext/UserContext.jsx'; 
import ShowUser from './components/ShowUser/ShowUser.jsx';
import InputUser from './components/InputUser/InputUser.jsx'; 
const App = () => {
  return (
    <UserProvider>
      <div>
        <ShowUser /> 
        <InputUser /> 
      </div>
    </UserProvider>
  );
};

export default App;
