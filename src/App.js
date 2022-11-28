import {useState} from 'react';
import Jogo from "./components/Jogo.js";
import Letras from './components/Letras.js';
import Chute from "./components/Chute.js"
import palavras from './components/palavras.js';

function App() {
  const [errors, setErrors] = useState(0);
  const [chooseWordButton, setChooseWordButton] = useState(false);
  const [guessWord, setGuessWord] = useState("");
  const [hiddenWord, setHiddenWord] = useState("");
  const [letterPressed, setLetterPressed] = useState([]);
  const [bottomElements, setBottomElements] = useState("hidden");
  const [guessInput, setGuessInput] = useState("");
  const [won, setWon] = useState(1);
  const [word, setWord] = useState("word");
  const [keyLetterStyle, setKeyLetter] = useState("key-letter");
  const [endGame, setEndGame] = useState(false);

  function wonTheGame(){
    setWord("word won")
    setKeyLetter("key-letter-pressed");
    setEndGame(true);
    setChooseWordButton(false);
  }

  function lostTheGame(){
    setWord("word lost")
    setKeyLetter("key-letter-pressed");
    setEndGame(true);
    setChooseWordButton(false);
  }

  function pressChooseWord(){
    if(endGame === true){
      reset();
    }

    if(chooseWordButton === false){

      const sortWord = Math.floor(Math.random()*palavras.length);
      const newWord = palavras[sortWord];
      const newHiddenWord = newWord.split("").map((letters) => letters = "_ ");
      console.log(newWord)
    
      setGuessWord(newWord);
      setHiddenWord(newHiddenWord);
      setChooseWordButton(true);
      setBottomElements("bottom-elements")
    }
  }

  function reset(){
    setErrors(0);
    setLetterPressed([]);
    setGuessInput("");
    setWon(1);
    setWord("word");
    setKeyLetter("key-letter");
    setEndGame(false);
  }

  function pressingLetterButton(keyLetter, index){
    if(letterPressed.includes(keyLetter)){
      return false;
    } else{
      if(!guessWord.includes(keyLetter)){
        setErrors(errors + 1);
        if(errors === 5){
          setHiddenWord(guessWord);
          lostTheGame();
        }
    }
    
    if(guessWord.includes(keyLetter)){
      let rightLetter = 0;
      const arrayGessWord = guessWord.split("");
      arrayGessWord.map((letter, index) => letter.includes(keyLetter) ? hiddenWord[index] = guessWord[index] : false);
      arrayGessWord.map((letter, index) => letter.includes(keyLetter) ? rightLetter++ : false);
      setWon(won + rightLetter);
    }

    if(won === hiddenWord.length){
      wonTheGame();
    }

      return setLetterPressed([...letterPressed, keyLetter]);
    }
  }

  function guessInputFunction(){
    const guessInputWord = guessInput.toLowerCase()
    if(guessInputWord === guessWord){
      setWon(guessWord.length);
      wonTheGame();
    } else{
      setErrors(6);
      lostTheGame();
    }
    setHiddenWord(guessWord);
  }

  return (
    <>
      <Jogo errors={errors} word={word} pressChooseWord={pressChooseWord} chooseWordButton={chooseWordButton}
      guessWord={guessWord} hiddenWord={hiddenWord}/>

      <div className={bottomElements}>
          <Letras endGame={endGame} pressingLetterButton={pressingLetterButton} keyLetterStyle={keyLetterStyle} letterPressed={letterPressed}/>

        <Chute endGame={endGame} bottomElements={bottomElements} guessInput={guessInput} setGuessInput={setGuessInput} guessInputFunction={guessInputFunction}/>
      </div>
    </>
  );
}

export default App;