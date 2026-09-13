import styles from './PokemonCard.module.css';

import { Pokemon } from '@/types/pokemon';
import PokemonImage from '../PokemonImage';
import StatList from '../StatList';

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    return (
        <li className={styles.card}>
            <div className={styles.top}>
                <span className={styles.pokeid}>
                    #{String(pokemon.id).padStart(3, '0')}
                </span>
            </div>
            <PokemonImage src={pokemon.imageUrl} alt={pokemon.name} />
            <p className={styles.name}>{pokemon.name}</p>
            <StatList stats={pokemon.stats} />
        </li>
    );
};

export default PokemonCard;
