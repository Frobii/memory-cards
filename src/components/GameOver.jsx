import '../styles/game-over.css'
import { Icon } from '@mdi/react';
import { mdiRefresh } from '@mdi/js';

export default function GameOver({
    setClickedPokemon,
    setGameOver,
    gameWon,
    setGameWon,
}) {

    function resetGame() {
        setClickedPokemon([]);
        setGameOver(false);
        setGameWon(false);
    }

    return (
        <>
            {gameWon ?
                <h2 className="game-won">You won!</h2>
                :
                <h2 className="game-over">Game Over</h2>
            }
            <div className="restart-container">
                <p className="restart-text">Would you like to restart the game?</p>
                <Icon
                    className="mdi-refresh"
                    onClick={() => resetGame()}
                    path={mdiRefresh} size={2}
                />
            </div>
        </>
    )
}