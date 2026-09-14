import { render, screen } from '@testing-library/react';
import StatList from '.';

describe('StatList', () => {
    it('renders all four stats with labels and values', () => {
        render(
            <StatList stats={{ hp: 45, attack: 49, defense: 50, speed: 51 }} />,
        );
        const terms = screen.getAllByRole('term').map((el) => el.textContent);
        const values = screen
            .getAllByRole('definition')
            .map((el) => el.textContent);
        expect(terms).toEqual(['HP', 'ATK', 'DEF', 'SPD']);
        expect(values).toEqual(['45', '49', '50', '51']);
    });
});
