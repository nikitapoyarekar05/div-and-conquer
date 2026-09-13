import styles from './StatItem.module.css';
interface StatItemProps {
    label: string;
    value: number;
}

const StatItem = ({ label, value }: StatItemProps) => {
    return (
        <div className={styles.statBox}>
            <dt className={styles.label}>{label}</dt>
            <dd className={styles.value}>{value}</dd>
        </div>
    );
};

export default StatItem;
