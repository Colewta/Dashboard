import styles from './HeaderButton.module.css';

interface HeaderButtonProps {
    onclick: () => void
}

const HeaderButton = ({onclick}: HeaderButtonProps) => {
    return (
        <button onClick={onclick} className={styles.btnTransacao}>+ Nova Transação</button>
    )
}

export default HeaderButton;