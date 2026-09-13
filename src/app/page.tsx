import styles from './page.module.css';
import Summary from '@/components/Summary';
import Explorer from '@/components/Explorer';

import { fetchPokemonList } from '@/lib/api/pokemon';

export default async function Home() {
    const pokemon = await fetchPokemonList();
    return (
        <main className={styles.page}>
            <Summary />
            <Explorer pokemons={pokemon} />
        </main>
    );
}
