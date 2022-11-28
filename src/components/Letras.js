export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <>
            <div className="keyboard">
                {alfabeto.map((keyLetter, index) =>
                <button disabled={props.endGame} onClick={() => props.pressingLetterButton(keyLetter, index)} data-test="letter" className={props.letterPressed.includes(keyLetter)? "key-letter-pressed" : props.keyLetterStyle}>{keyLetter.toUpperCase()}</button>
                )
                }
            </div>
        </>
    );
}