import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import LanguagesFrame from "./components/languages";
import clsx from "clsx";
import { getRandomWord } from "./utils";
import Confetti from 'react-confetti'
import WinOrLose from "./components/WinOrLose";

/**
 * Backlog:
 * 
 * ✅ Farewell messages in status section
 * ✅ Disable the keyboard when the game is over
 * ✅ Fix a11y issues
 * ✅ Choose a random word from a list of words
 * ✅ Make the New Game button reset the game
 * - Reveal what the word was if the user loses the game
 * ✅ Confetti drop when the user wins
 * 
 * Challenge: Reveal the missing letters of the word if the user
 * loses the game. Style the missing letters to have the same red
 * color as the wrong letter keys.
 */

function App() {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let wrongGuesses = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  );
  let wrongGuessCount = wrongGuesses.length;
  const gameIsWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const gameIsLost = wrongGuessCount >= 8;
  const isGameOver = gameIsWon || gameIsLost;
  const lastguessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastguessedLetter && !currentWord.includes(lastguessedLetter);

  function addGuessedLetters(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const mapWord = currentWord.split("").map((letter, index) => {
      const shouldRevealLetter = gameIsLost || guessedLetters.includes(letter)
      const letterClassName = clsx(
        gameIsLost && !guessedLetters.includes(letter) && "missed-letter"
      )
      return (<span className={`letter ${letterClassName}`} key={index}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    )});

  const keyboard = alphabet.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={index}
        onClick={() => addGuessedLetters(letter)}
        disabled={isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  function startNewGame(){
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  return (
    <main>
      {gameIsWon && <Confetti/>}
      <Header />
      <Status
        className="status"
        gameIsWon={gameIsWon}
        gameIsLost={gameIsLost}
        guessedLetters={guessedLetters}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <LanguagesFrame wrongGuessCount={wrongGuessCount} />
      <section className="letterFrame">{mapWord}</section>
      <section className="keyboard">{keyboard}</section>
      {isGameOver && 
      <button
      onClick={startNewGame} 
      className="new-game"
      >New Game</button>}
      <WinOrLose
        gameIsLost={gameIsLost}
        gameIsWon={gameIsWon}
        currentWord={currentWord}
      />
    </main>
  );
}

export default App;
