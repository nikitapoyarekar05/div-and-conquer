import { render, screen } from '@testing-library/react';
import PokemonGrid from '.';
import { pokemons } from '@/test/fixtures';

describe('PokemonGrid', () => {
    it('renders a card per pokemon', () => {
        render(<PokemonGrid pokemons={pokemons} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(pokemons.length);
        expect(
            screen.queryByText('No Pokemon match your search.'),
        ).not.toBeInTheDocument();
    });

    it('renders the empty message when there are no pokemons', () => {
        render(<PokemonGrid pokemons={[]} />);
        expect(
            screen.getByText('No Pokemon match your search.'),
        ).toBeInTheDocument();
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
});
