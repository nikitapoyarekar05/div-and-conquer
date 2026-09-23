import styles from './SortControls.module.css';

import { SortKey, SortOrder } from '@/types/pokemon';

interface SortControlsProps {
    sortKey: SortKey;
    sortOrder: SortOrder;
    onSortChange: (key: SortKey) => void;
}

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'hp', label: 'HP' },
    { key: 'attack', label: 'ATK' },
    { key: 'defense', label: 'DEF' },
    { key: 'speed', label: 'SPD' },
];

const SortControls = ({
    sortKey,
    sortOrder,
    onSortChange,
}: SortControlsProps) => {
    return (
        <div className={styles.sortControls}>
            <span id="sort-label" className={styles.sortLabel}>
                Sort by
            </span>
            <div
                className={styles.sortOptions}
                role="group"
                aria-labelledby="sort-label"
            >
                {SORT_OPTIONS.map(({ key, label }) => {
                    const isActive = sortKey === key;
                    return (
                        <button
                            key={key}
                            type="button"
                            className={`${styles.sortButton} ${isActive ? styles.active : ''}`}
                            onClick={() => onSortChange(key)}
                            aria-pressed={isActive}
                        >
                            {label}
                            {isActive && (
                                <>
                                    <span
                                        className={styles.arrow}
                                        aria-hidden="true"
                                    >
                                        {sortOrder === 'asc' ? '↑' : '↓'}
                                    </span>
                                    <span className={styles.screenReader}>
                                        {sortOrder === 'asc'
                                            ? 'ascending'
                                            : 'descending'}
                                    </span>
                                </>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SortControls;
