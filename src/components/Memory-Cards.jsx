import { useEffect, useState } from 'react'
import Card from './Card';

export default function MemoryCards() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

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
                setPokemon(data)
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
            <Card
                pokemon={pokemon}
            />
        </>
    )
}