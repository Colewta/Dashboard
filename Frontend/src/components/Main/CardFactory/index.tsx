import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";
import styles from './Cards.module.css';

interface CardsProps {
    id: string,
    title: string,
    Icon: LucideIcon,
    value: number,
    perc: number,
}

const Cards = ({id, title, Icon, value, perc}: CardsProps) => {
    const valueArrumado = value.toFixed(3);

    const arrowUp = <ArrowUp size={22} color="green" className={styles.arrowUp} />
    const arrowDown = <ArrowDown size={22} color="red" className={styles.arrowUp} />

    const percMaiorQueZero = perc > 0;

    return (
        <div className={styles.cardDiv}>
            <div className={styles.infoText}>
                <div className={styles.valueDiv}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.money}>
                        <h2>R$</h2>
                        <h2>{valueArrumado}</h2>
                    </div>
                </div>

                <Icon size={55} color="white" className={`${styles.icon} ${styles[id]}`}/>
            </div>

            <div className={styles.perc}>
                {percMaiorQueZero ? arrowUp : arrowDown}
                <p className={`${percMaiorQueZero ? styles.greenP : styles.redP} ${styles.percText}`}>{`${perc}% vs mês anterior`}</p>
            </div>
        </div>
    )
}

export default Cards;