import styles from './StatList.module.css';
import { PokemonStats } from '@/types/pokemon';

import StatItem from '../StatItem';

interface StatListProps {
    stats: PokemonStats;
}

const StatList = ({ stats }: StatListProps) => {
    return (
        <dl className={styles.statList}>
            <StatItem label="HP" value={stats.hp} />
            <StatItem label="ATK" value={stats.attack} />
            <StatItem label="DEF" value={stats.defense} />
            <StatItem label="SPD" value={stats.speed} />
        </dl>
    );
};

export default StatList;
