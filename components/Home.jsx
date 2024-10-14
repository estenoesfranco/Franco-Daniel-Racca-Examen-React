import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nameRef = useRef('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    const playerName = nameRef.current.value;
    if (playerName) {
      navigate('/game', { state: { playerName } });
    }
  };

  return (
    <div className="home">
      <h1>¡Bienvenido a FOUR!</h1>
      <input type="text" placeholder="Ingresa tu nombre" ref={nameRef} />
      <button onClick={handleStartGame}>Comenzar Juego</button>
    </div>
  );
};

export default Home;
