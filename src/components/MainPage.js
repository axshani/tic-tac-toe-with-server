import React from 'react';
import { Board } from "./Board";

export default function MainPage() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};