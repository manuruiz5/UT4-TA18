import { useState, useEffect } from 'react';

const Timer = () => {
  // Estado para almacenar el valor del temporizador
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Iniciamos el intervalo que incrementa el valor del temporizador cada segundo
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Incrementamos el temporizador
    }, 1000); // Cada 1000 ms (1 segundo)
    return () => {
      clearInterval(intervalId); // Limpiamos el intervalo para que no siga corriendo en segundo plano
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez 


  return (
    <div>
      <h1>Temporizador</h1>
      <p>Segundos transcurridos: {seconds}</p>
    </div>
  );
};

export default Timer;
