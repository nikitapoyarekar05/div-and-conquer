import styles from './SearchBar.module.css';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <div className={styles.searchBar}>
            <label htmlFor="pokemon-search" className={styles.searchLabel}>
                Search by name
            </label>
            <input
                id="pokemon-search"
                type="text"
                className={styles.input}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search your favorite Pokemon..."
            />
        </div>
    );
};

export default SearchBar;
