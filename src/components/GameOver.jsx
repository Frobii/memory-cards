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
                <p className="game-won">You won!</p>
                :
                <p className="game-over">Game Over</p>
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