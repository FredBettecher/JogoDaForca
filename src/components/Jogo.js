export default function Jogo(props){
    return(
        <>
            <div className="top-elements">
                <div className="top-left">
                <img src={`./assets/forca${props.errors}.png`} data-test="game-image" className="gallows"></img>
                </div>
                <div className="top-right">
                <button onClick={props.pressChooseWord} data-test="choose-word" className="choose-word" disabled={props.chooseWordButton}>Escolher Palavra</button>
                <h1 className={props.word} data-test="word" data-answer={props.guessWord}>{props.hiddenWord}</h1>
                </div>
            </div>
        </>
    );
}
