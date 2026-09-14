import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '.';

describe('SearchBar', () => {
    it('renders a labelled input with the given value', () => {
        render(<SearchBar value="pika" onChange={() => {}} />);
        expect(screen.getByLabelText('Search by name')).toHaveValue('pika');
    });

    it('calls onChange with the new value when typing', async () => {
        const onChange = vi.fn();
        render(<SearchBar value="" onChange={onChange} />);
        await userEvent.type(screen.getByLabelText('Search by name'), 'a');
        expect(onChange).toHaveBeenCalledWith('a');
    });
});
