import { UserContext } from '../UserContext/UserContext.jsx'; // Importamos el contexto
import  { useContext } from 'react'; 
const ShowUser = () => {
  const userName = useContext(UserContext); // Obtenemos el nombre del usuario desde el contexto

  return (
    <div>
      <h2>Nombre del usuario: {userName}</h2> 
    </div>
  );
};

export default ShowUser;
