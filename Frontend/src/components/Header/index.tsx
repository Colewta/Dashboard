import HeaderButton from './HeaderButton';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderTitle from './HeaderTitle';
import styles from './Header.module.css';

interface HeaderProps {
    onOpen: () => void
}

const Header = ({onOpen}: HeaderProps) => {
    return (
        <div className={styles.header}>
            <HeaderTitle />
            <HeaderSearchBar />
            <HeaderButton onclick={onOpen} />
        </div>
    )
}

export default Header;