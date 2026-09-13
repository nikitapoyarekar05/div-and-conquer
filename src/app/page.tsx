import styles from './page.module.css';

import Summary from '@/components/Summary';
import Explorer from '@/components/Explorer';

export default function Home() {
    return (
        <div>
            <main className={styles.page}>
                <Summary />
                <Explorer />
            </main>
        </div>
    );
}
