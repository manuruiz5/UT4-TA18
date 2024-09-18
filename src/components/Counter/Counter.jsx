import { useState, useEffect } from 'react';

const Counter = () => {
  // Definimos el estado del contador con un valor inicial de 0
  const [count, setCount] = useState(0);

  // Funciones para aumentar y disminuir el contador
  const aumentar = () => {
    setCount(count + 1);
  };

  const disminuir = () => {
    setCount(count - 1);
  };

   // useEffect para cambiar el título del documento cuando el contador cambia
   useEffect(() => {
    document.title = `Contador: ${count}`; // Cambiamos el título del documento
  }, [count]); // El efecto se ejecuta cada vez que 'count' cambia

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Counter;
