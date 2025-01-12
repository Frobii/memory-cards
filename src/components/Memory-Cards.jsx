import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Cards from './Cards';
import '../styles/memory-cards.css'

export default function MemoryCards() {
    const [pokemon, setPokemon] = useState([]);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const pokemonIds = [25, 12, 17, 6, 99, 89, 128, 57, 131, 93];
                const promises = pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`));
                const responses = await Promise.all(promises);
                for (const response of responses) {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                }
                const data = await Promise.all(responses.map(response => response.json()));

                const pokemonWithUUID = data.map((pokemon) => ({
                    ...pokemon,
                    uuid: uuidv4(),
                }));

                setPokemon(pokemonWithUUID)
                setLoading(false)
            } catch (error) {
                console.error("There's been a problem with your fetch:", error);
                setError(error.message)
                setLoading(false)
            }
        }
        fetchPokemon();
    }, []);

    return (
        <>
            {error ? (
                <div className="error">
                    <p className="error-text">Error loading Pokémon data: {error}</p>
                </div>
            ) : loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                    <h1>Pokémem</h1>
                    <Cards
                        pokemon={pokemon}
                        clickedPokemon={clickedPokemon}
                        setClickedPokemon={setClickedPokemon}
                        setGameOver={setGameOver}
                    />
                </>
            )}
        </>
    )
}