import { UserProvider } from './components/UserContext/UserContext.jsx'; 
import ShowUser from './components/ShowUser/ShowUser.jsx'; 
const App = () => {
  return (
    <UserProvider>
      <div>
        <ShowUser /> 
      </div>
    </UserProvider>
  );
};

export default App;
