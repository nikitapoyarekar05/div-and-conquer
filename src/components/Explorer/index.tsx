import PokemonGrid from '../PokemonGrid';
import SearchBar from '../SearchBar';
import SortControls from '../SortControls';

import { mockPokemon } from '@/lib/mock/mock';

const Explorer = () => {
    return (
        <div>
            <SearchBar />
            <SortControls />
            <PokemonGrid pokemons={mockPokemon} />
        </div>
    );
};

export default Explorer;
