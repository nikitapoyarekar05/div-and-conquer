import { render, screen } from '@testing-library/react';
import Summary from '.';

describe('Summary', () => {
    it('renders heading, approach link and legend', () => {
        render(<Summary />);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'here' })).toHaveAttribute(
            'href',
            '/approach',
        );
        expect(
            screen.getAllByRole('definition').map((el) => el.textContent),
        ).toEqual(['Hit Points', 'Attack', 'Defense', 'Speed']);
    });
});
