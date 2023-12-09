import React, { useState, useEffect } from 'react';
import './NumberGuessingGame.css'; // Assurez-vous d'importer le fichier CSS correct

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      setMessage('Veuillez entrer un nombre valide.');
      return;
    }

    setAttempts(attempts + 1);

    if (guess === targetNumber) {
      setMessage(`Bravo ! Vous avez deviné le nombre en ${attempts} tentatives.`);
    } else if (guess < targetNumber) {
      setMessage('Le nombre cible est plus grand. Essayez encore.');
    } else {
      setMessage('Le nombre cible est plus petit. Essayez encore.');
    }
  };

  useEffect(() => {
    setTargetNumber(generateRandomNumber());
    setUserGuess('');
    setMessage('');
    setAttempts(0);
  }, [targetNumber]);

  return (
    <div className="container">
      <h1>Jeu de devinette de nombres</h1>
      <p>Devinez le nombre entre 1 et 100 :</p>

      <input
        type="text"
        value={userGuess}
        onChange={handleInputChange}
        placeholder="Entrez votre guess"
      />
      <button onClick={handleGuess}>Devinez !</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default NumberGuessingGame;
