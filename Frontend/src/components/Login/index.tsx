import { TrendingUp } from 'lucide-react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <TrendingUp size={40} color='white' className={styles.icon} />
                <h1 className={styles.title}>FinControl</h1>
                <p className={styles.subtitle}>Entre para gerenciar suas finanças</p>
            </div>
        </form>
    )
}

export default Login;