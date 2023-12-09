// src/pages/HomePage.js
import React from 'react';
import { Link } from 'gatsby';
import './HomePage.css'; // Importez le fichier CSS

const HomePage = () => {
  return (
    <div className="container">
      <h1>Bienvenue sur le site de jeux doundoun</h1>
      <div>
        <Link to="/NumberGuessingGame" className="game-link">
          Jeu de devinette de nombres
        </Link>
      </div>
      <div>
        <Link to="/TicTacToe" className="game-link">
          Tic Tac Toe
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
