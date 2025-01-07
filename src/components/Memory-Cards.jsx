import { useEffect, useState } from 'react'

export default function MemoryCards() {
    const [existingPokemon, setExistingPokemon] = useState([]);

    return (
        <>
            <Card
                existingPokemon={existingPokemon}
            />
        </>
    )
}