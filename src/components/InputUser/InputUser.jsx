import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext.jsx'; 

const InputUser = () => {
  const { userName, setUserName } = useContext(UserContext); 

  // Función que se ejecuta cuando el usuario escribe en el input
  const inputChange = (e) => {
    setUserName(e.target.value); // Actualizamos el nombre en el contexto
  };

  return (
    <div>
      <input 
        type="text" 
        value={userName} 
        onChange={inputChange} 
        placeholder="Escribe un nuevo nombre" 
      />
    </div>
  );
};

export default InputUser;
