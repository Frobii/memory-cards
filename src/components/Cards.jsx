import { useEffect, useState } from 'react'
import '../styles/card.css'

export default function Cards({
    pokemon,
}) {

    return (
        <>
            <div className='cards-container'>
                {pokemon.length > 0 && (
                    pokemon.map((pokemon, index) => (
                        <div className='pokemon-card'>
                            <img key={index} src={pokemon.sprites.front_default}></img>
                            <div key={index}>{
                                pokemon.name.substring(0, 1).toUpperCase() +
                                pokemon.name.substring(1, pokemon.name.length)
                            }</div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}