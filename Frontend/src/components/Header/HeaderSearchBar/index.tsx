import styles from './HeaderSearchBar.module.css';

const HeaderSearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <span className={styles.icon}>🔍</span>
            <input className={styles.text} placeholder="Buscar transação..." />
        </div>
    )
}

export default HeaderSearchBar;