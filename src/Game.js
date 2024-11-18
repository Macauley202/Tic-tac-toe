import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

function Game() {
   // Step 1: Initialize the state
   const [moves, setMoves] = useState(new Array(9).fill("")); // Tracks the moves on the board
   const [turn, setTurn] = useState("X"); // Tracks the current player ('X' or 'O')

   // Step 2: Handle grid square clicks
   function gridClick(whichSquare) {
      // Check if the clicked square is empty, only allow a move if it's empty
      if (moves[whichSquare] === "") {
         const newMoves = [...moves];
         newMoves[whichSquare] = turn; // Place the current player's move
         setMoves(newMoves); // Update the moves state

         // Switch the turn to the other player
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // Step 3: Reset the game state
   function newGame() {
      setMoves(new Array(9).fill("")); // Reset the board
      setTurn("X"); // Reset the turn to X
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;