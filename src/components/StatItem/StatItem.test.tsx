import { render, screen } from '@testing-library/react';
import StatItem from '.';

describe('StatItem', () => {
    it('renders label and value', () => {
        render(
            <dl>
                <StatItem label="HP" value={45} />
            </dl>,
        );
        expect(screen.getByRole('term')).toHaveTextContent('HP');
        expect(screen.getByRole('definition')).toHaveTextContent('45');
    });
});
