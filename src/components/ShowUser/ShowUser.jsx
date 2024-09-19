import { UserContext } from '../UserContext/UserContext.jsx'; 
import  { useContext } from 'react'; 
const ShowUser = () => {
  const {userName} = useContext(UserContext); 

  return (
    <div>
      <h2>Nombre del usuario: {userName}</h2> 
    </div>
  );
};

export default ShowUser;
