'use client';

import { useMemo, useState } from 'react';
import styles from './Explorer.module.css';

import PokemonGrid from '../PokemonGrid';
import SearchBar from '../SearchBar';
import { Pokemon, SortKey, SortOrder } from '@/types/pokemon';
import SortControls from '../SortControls';

interface ExplorerProps {
    pokemons: Pokemon[];
}

const getSortValue = (pokemon: Pokemon, key: SortKey): number => {
    return key === 'id' ? pokemon.id : pokemon.stats[key];
};

const Explorer = ({ pokemons }: ExplorerProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortKey, setSortKey] = useState<SortKey>('id');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    const handleSortChange = (key: SortKey) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    const filteredPokemons = useMemo(
        () =>
            pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
        [pokemons, searchQuery],
    );

    const sortedPokemons = useMemo(() => {
        return [...filteredPokemons].sort((a, b) => {
            const diff = getSortValue(a, sortKey) - getSortValue(b, sortKey);
            return sortOrder === 'asc' ? diff : -diff;
        });
    }, [filteredPokemons, sortKey, sortOrder]);

    return (
        <div className={styles.explorer}>
            <div className={styles.toolbar}>
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <SortControls
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                    onSortChange={handleSortChange}
                />
            </div>
            <p className={styles.count} aria-live="polite">
                {sortedPokemons.length} of {pokemons.length} shown
            </p>
            <PokemonGrid pokemons={sortedPokemons} />
        </div>
    );
};

export default Explorer;
