import { Pokemon } from '@/types/pokemon';
import PokemonImage from '../PokemonImage';
import StatList from '../StatList';

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    console.log({ pokemon });

    return (
        <div>
            <PokemonImage url={pokemon.image} />
            <StatList stats={pokemon.stats} />
        </div>
    );
};

export default PokemonCard;
