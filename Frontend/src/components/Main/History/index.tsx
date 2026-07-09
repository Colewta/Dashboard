import styles from './History.module.css';
import { API } from './teste';
import TransactionFactory from './TransactionFactory';

const History = () => {
    const props = API;

    return (
        <section className={styles.history}>
            <h1 className={styles.title}>Transações recentes</h1>
            <p className={styles.subtitle}>Últimas movimentações da sua conta</p>
            
            <div className={styles.transactionHeader}>
                <p id='p1' className={styles.headerP}>Data</p>
                <p id='p2' className={styles.headerP}>Descrição</p>
                <p id='p3' className={styles.headerP}>Categoria</p>
                <p id='p4' className={styles.headerP}>Tipo</p>
                <p id='p5' className={styles.headerP}>Valor</p>
            </div>

            <div className={styles.transaction}>
                {props.map(transacao => (
                    <TransactionFactory
                        data={transacao.data}
                        descricao={transacao.descricao}
                        categoria={transacao.categoria}
                        tipo={transacao.tipo}
                        valor={transacao.valor}
                    />
                ))}
            </div>
        </section>
    )
}

export default History;