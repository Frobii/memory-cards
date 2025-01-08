import { useEffect, useState } from 'react'

export default function Card({
    pokemon,
}) {

    return (
        <>
            <div>
                {pokemon.length > 0 && (
                    pokemon.map((pokemon, index) => (
                        <div key={index}>{pokemon.name}</div>
                    ))
                )}
            </div>
        </>
    )
}