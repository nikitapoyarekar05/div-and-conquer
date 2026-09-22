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
                Download my approach notes&nbsp;
                <a
                    className={styles.link}
                    aria-label="Download my approach notes"
                    download
                    href="/approach.txt"
                >
                    here
                </a>
                .
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
