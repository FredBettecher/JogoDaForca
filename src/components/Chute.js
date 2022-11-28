export default function Chute(props){
    return(
        <>
            <div className="guess">
                <p>Já sei a palavra!</p>  
                <input disabled={props.endGame} type="text" placeholder="" value={props.guessInput} onChange={(event) => props.setGuessInput(event.target.value)} className="guess-input" data-test="guess-input"/>
                <button disabled={props.endGame} onClick={props.guessInputFunction} data-test="guess-buttom" className='guess-buttom'>Chutar</button>
            </div>
        </>
    );
}