import { useState, useEffect } from 'react';

const UserList = () => {
  // Estado para almacenar los datos de los usuarios
  const [users, setUsers] = useState([]);

  // useEffect para realizar la llamada a la API cuando el componente se renderiza por primera vez
  useEffect(() => {
    // Función asíncrona para obtener los datos de la API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data); // Actualizamos el estado con los usuarios obtenidos
      } catch (error) {
        console.error('Error fetching the users:', error);
      }
    };

    fetchUsers(); // Llamamos a la función para obtener los usuarios
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez

  return (
    <div>
      <h1>Lista de Usuarios:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - <em>{user.email}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
