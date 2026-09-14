export interface PokemonStats {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
}

export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    stats: PokemonStats;
}

export interface PokemonDetailResponse {
    id: number;
    name: string;
    sprites: {
        front_default: string | null;
        other?: {
            'official-artwork'?: { front_default: string | null };
        };
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

export interface PokemonResult {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonResult[];
}

export type SortKey = 'id' | 'hp' | 'attack' | 'defense' | 'speed';
export type SortOrder = 'asc' | 'desc';
