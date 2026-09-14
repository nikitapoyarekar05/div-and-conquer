import { Pokemon } from '@/types/pokemon';

export const makePokemon = (overrides: Partial<Pokemon> = {}): Pokemon => ({
    id: 1,
    name: 'bulbasaur',
    imageUrl: 'https://example.com/1.png',
    stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
    ...overrides,
});

export const pokemons: Pokemon[] = [
    makePokemon({
        id: 1,
        name: 'bulbasaur',
        stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
    }),
    makePokemon({
        id: 4,
        name: 'charmander',
        stats: { hp: 39, attack: 52, defense: 43, speed: 65 },
    }),
    makePokemon({
        id: 7,
        name: 'squirtle',
        stats: { hp: 44, attack: 48, defense: 65, speed: 43 },
    }),
    makePokemon({
        id: 25,
        name: 'pikachu',
        stats: { hp: 35, attack: 55, defense: 40, speed: 90 },
    }),
];
