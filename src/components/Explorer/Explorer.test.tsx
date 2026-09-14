import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Explorer from '.';
import { pokemons } from '@/test/fixtures';

const cardNames = () =>
    screen.getAllByRole('img').map((img) => img.getAttribute('alt'));

describe('Explorer', () => {
    it('renders all pokemons sorted by id ascending by default', () => {
        render(<Explorer pokemons={pokemons} />);
        expect(cardNames()).toEqual([
            'bulbasaur',
            'charmander',
            'squirtle',
            'pikachu',
        ]);
        expect(screen.getByText('4 of 4 shown')).toBeInTheDocument();
    });

    it('filters by name case-insensitively and updates the count', async () => {
        render(<Explorer pokemons={pokemons} />);
        await userEvent.type(screen.getByLabelText('Search by name'), 'PIKA');
        expect(cardNames()).toEqual(['pikachu']);
        expect(screen.getByText('1 of 4 shown')).toBeInTheDocument();
    });

    it('shows the empty message when nothing matches', async () => {
        render(<Explorer pokemons={pokemons} />);
        await userEvent.type(screen.getByLabelText('Search by name'), 'zzz');
        expect(
            screen.getByText('No Pokemon match your search.'),
        ).toBeInTheDocument();
        expect(screen.getByText('0 of 4 shown')).toBeInTheDocument();
    });

    it('sorts by a stat, toggles order on repeat click, and resets on new key', async () => {
        render(<Explorer pokemons={pokemons} />);
        const hp = screen.getByRole('button', { name: 'HP' });
        const spd = screen.getByRole('button', { name: 'SPD' });

        await userEvent.click(hp);
        expect(cardNames()).toEqual([
            'pikachu',
            'charmander',
            'squirtle',
            'bulbasaur',
        ]);

        await userEvent.click(hp);
        expect(cardNames()).toEqual([
            'bulbasaur',
            'squirtle',
            'charmander',
            'pikachu',
        ]);

        await userEvent.click(spd);
        expect(cardNames()).toEqual([
            'squirtle',
            'bulbasaur',
            'charmander',
            'pikachu',
        ]);
        expect(spd).toHaveAttribute('aria-pressed', 'true');
        expect(hp).toHaveAttribute('aria-pressed', 'false');
    });

    it('applies sort to the filtered set', async () => {
        render(<Explorer pokemons={pokemons} />);
        await userEvent.type(screen.getByLabelText('Search by name'), 'a');
        await userEvent.click(screen.getByRole('button', { name: 'ATK' }));
        expect(cardNames()).toEqual(['bulbasaur', 'charmander', 'pikachu']);
    });
});
