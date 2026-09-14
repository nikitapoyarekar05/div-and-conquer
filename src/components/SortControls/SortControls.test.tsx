import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortControls from '.';

describe('SortControls', () => {
    it('renders all sort options and marks the active one pressed', () => {
        render(
            <SortControls
                sortKey="hp"
                sortOrder="asc"
                onSortChange={() => {}}
            />,
        );
        const buttons = screen.getAllByRole('button');
        expect(buttons.map((b) => b.textContent)).toEqual([
            'ID',
            'HP↑',
            'ATK',
            'DEF',
            'SPD',
        ]);
        expect(screen.getByRole('button', { name: 'HP' })).toHaveAttribute(
            'aria-pressed',
            'true',
        );
        expect(screen.getByRole('button', { name: 'ID' })).toHaveAttribute(
            'aria-pressed',
            'false',
        );
    });

    it('shows a down arrow when sort order is desc', () => {
        render(
            <SortControls
                sortKey="hp"
                sortOrder="desc"
                onSortChange={() => {}}
            />,
        );
        expect(screen.getByRole('button', { name: 'HP' })).toHaveTextContent(
            '↓',
        );
    });

    it('calls onSortChange with the clicked key', async () => {
        const onSortChange = vi.fn();
        render(
            <SortControls
                sortKey="id"
                sortOrder="asc"
                onSortChange={onSortChange}
            />,
        );
        await userEvent.click(screen.getByRole('button', { name: 'ATK' }));
        expect(onSortChange).toHaveBeenCalledWith('attack');
    });
});
