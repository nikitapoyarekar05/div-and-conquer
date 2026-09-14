import { render, screen } from '@testing-library/react';
import PokemonCard from '.';
import { makePokemon } from '@/test/fixtures';

describe('PokemonCard', () => {
    it('renders name, zero-padded id, image and stats', () => {
        render(
            <ul>
                <PokemonCard
                    pokemon={makePokemon({ id: 7, name: 'squirtle' })}
                />
            </ul>,
        );
        expect(screen.getByRole('listitem')).toBeInTheDocument();
        expect(screen.getByText('#007')).toBeInTheDocument();
        expect(screen.getByText('squirtle')).toBeInTheDocument();
        expect(
            screen.getByRole('img', { name: 'squirtle' }),
        ).toBeInTheDocument();
        expect(screen.getAllByRole('term')).toHaveLength(4);
    });

    it('does not pad ids with three or more digits', () => {
        render(
            <ul>
                <PokemonCard pokemon={makePokemon({ id: 150 })} />
            </ul>,
        );
        expect(screen.getByText('#150')).toBeInTheDocument();
    });
});
