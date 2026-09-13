import PokemonCard from '../PokemonCard';

import { Pokemon } from '@/types/pokemon';

interface PokemonGridProps {
    pokemons: Pokemon[];
}

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
    return (
        <div>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonGrid;
