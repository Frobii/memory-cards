import { useEffect, useState } from 'react'
import '../styles/card.css'

export default function Cards({
    pokemon,
    clickedPokemon,
    setClickedPokemon,
    setGameOver,
    setGameWon,
}) {

    function addCardToClicked(uuid) {
        if (clickedPokemon.includes(uuid)) {
            setGameOver(true)
        } else {
            const addClickedPokemon = [...clickedPokemon, uuid];
            setClickedPokemon(addClickedPokemon);

            if (addClickedPokemon.length === 10) {
                setGameOver(true);
                setGameWon(true);
            }
        }
    }

    return (
        <>
            <div className='cards-container'>
                {pokemon.length > 0 &&
                    pokemon.map((pokemon) => {
                        return (
                            <div
                                className='pokemon-card'
                                key={pokemon.uuid}
                                onClick={() => addCardToClicked(pokemon.uuid)}
                            >
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
                                <div>{
                                    pokemon.name.substring(0, 1).toUpperCase() +
                                    pokemon.name.substring(1, pokemon.name.length)
                                }</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}