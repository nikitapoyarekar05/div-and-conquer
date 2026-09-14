import { render, screen } from '@testing-library/react';
import PokemonImage from '.';

describe('PokemonImage', () => {
    it('passes src and alt to the image', () => {
        render(
            <PokemonImage src="https://someImage.com/1.png" alt="bulbasaur" />,
        );
        const img = screen.getByRole('img', { name: 'bulbasaur' });
        expect(img).toHaveAttribute('src', 'https://someImage.com/1.png');
    });
});
