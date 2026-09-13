import { Pokemon, PokemonDetailResponse } from '@/types/pokemon';

export const mapPokemonDetail = (rawData: PokemonDetailResponse): Pokemon => {
    const statMap = Object.fromEntries(
        rawData.stats.map(
            (data: { stat: { name: string }; base_stat: number }) => [
                data.stat.name,
                data.base_stat,
            ],
        ),
    );

    return {
        id: rawData.id,
        name: rawData.name,
        imageUrl:
            rawData.sprites.other?.['official-artwork']?.front_default ??
            rawData.sprites.front_default ??
            '',
        stats: {
            hp: statMap.hp ?? 0,
            attack: statMap.attack ?? 0,
            defense: statMap.defense ?? 0,
            speed: statMap.speed ?? 0,
        },
    };
};
