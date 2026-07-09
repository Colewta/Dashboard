import Cards from "./CardFactory";
import Graphic from "./Graphic";
import History from "./History";
import { objInfos } from "./Infos";
import styles from './Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.cardsDiv}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Bem-vindo de volta! 👋</h1>
                    <p className={styles.p}>Aqui está um resumo das suas finanças</p>
                </div>

                <div className={styles.cards}>
                    {objInfos.map((obj, index) => (
                        <Cards
                            id={`icon${index}`}
                            title={obj.title}
                            Icon={obj.Icon}
                            value={obj.value}
                            perc={obj.perc}
                        />
                    ))}
                </div>
            </div>
                
            <div className={styles.graphic}>
                <Graphic />
            </div>

            <div className={styles.history}>
                <History />
            </div>
        </main>
    )
}

export default Main;