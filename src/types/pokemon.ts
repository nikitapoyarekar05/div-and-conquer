export interface PokemonStates {
    name: string;
    value: number;
}

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    stats: PokemonStates[];
}

export type sortKey = 'id' | 'hp' | 'attack' | 'defense' | 'speed';
export type sortOrder = 'asc' | 'desc';
