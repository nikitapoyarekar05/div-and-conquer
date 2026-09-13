import type {
    Pokemon,
    PokemonDetailResponse,
    PokemonListResponse,
} from '@/types/pokemon';
import { mapPokemonDetail } from '@/lib/utils/helper';

async function fetchPokemonDetail(url: string): Promise<Pokemon> {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Failed to fetch Pokemon details from ${url}`);
    }

    const data: PokemonDetailResponse = await res.json();
    return mapPokemonDetail(data);
}

export async function fetchPokemonList(): Promise<Pokemon[]> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pokemon?limit=20&offset=0`,
    );

    if (!res.ok) {
        throw new Error(
            `Failed to fetch Pokemon list from ${process.env.NEXT_PUBLIC_API_URL}`,
        );
    }

    const data: PokemonListResponse = await res.json();

    const settled = await Promise.allSettled(
        data.results.map((result) => {
            return fetchPokemonDetail(result.url);
        }),
    );

    const pokemon: Pokemon[] = [];
    for (const result of settled) {
        if (result.status === 'fulfilled') {
            pokemon.push(result.value);
        } else {
            console.error(`Failed to fetch Pokemon detail: ${result.reason}`);
        }
    }

    return pokemon;
}
