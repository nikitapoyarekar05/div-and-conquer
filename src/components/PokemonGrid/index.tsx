import styles from './PokemonGrid.module.css';

import PokemonCard from '../PokemonCard';
import { Pokemon } from '@/types/pokemon';

interface PokemonGridProps {
    pokemons: Pokemon[];
}

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
    if (pokemons.length === 0) {
        return (
            <p className={styles.noResults}>No Pokemon match your search.</p>
        );
    }
    return (
        <ul className={styles.grid}>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </ul>
    );
};

export default PokemonGrid;
