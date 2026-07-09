import { Wallet } from 'lucide-react';
import styles from './HeaderTitle.module.css';

const HeaderTitle = () => {
    return (
        <div className={styles.divTitle}>
            <Wallet className={styles.wallet} size={45} color='white' />
            <h1 className={styles.title}>FinControl</h1>
        </div>
    )
}

export default HeaderTitle;