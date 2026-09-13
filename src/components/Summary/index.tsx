import Link from 'next/link';

import styles from './Summary.module.css';

const Legend = [
    { abbr: 'HP', label: 'Hit Points' },
    { abbr: 'ATK', label: 'Attack' },
    { abbr: 'DEF', label: 'Defense' },
    { abbr: 'SPD', label: 'Speed' },
];

const Summary = () => {
    return (
        <header className={styles.summary}>
            <h1 className={styles.heading}>My approach: </h1>
            <p className={styles.body}>
                Click&nbsp;
                <Link className={styles.link} href="/approach">
                    here
                </Link>
                &nbsp;to read my approach.
            </p>

            <dl className={styles.legend}>
                {Legend.map(({ abbr, label }) => (
                    <div key={abbr} className={styles.legendItem}>
                        <dt className={styles.abbr}>{abbr} = </dt>
                        <dd className={styles.label}>{label}</dd>
                    </div>
                ))}
            </dl>
        </header>
    );
};

export default Summary;
