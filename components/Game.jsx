import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Feedback from './Feedback';

const Game = () => {
  const { state } = useLocation();
  const { playerName } = state || {};
  
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (guessNumber === randomNumber) {
      setFeedback('¡Correcto!');
      setGameWon(true);
    } else if (guessNumber > randomNumber) {
      setFeedback('Muy alto');
    } else {
      setFeedback('Muy bajo');
    }
  };

  return (
    <div className="game">
      <h1>¡Hola {playerName}!</h1>
      <div
        className="number-box"
      >
        
        {gameWon ? randomNumber : '?'}
      </div>
      <input
        type="number"
        placeholder="Ingresa tu número"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Adivinar</button>
      <Feedback feedback={feedback} />
      <p>Intentos: {attempts}</p>
    </div>
  );
};

export default Game;
