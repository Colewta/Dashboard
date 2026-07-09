import { formatDate } from '../../../../utils/trataData';
import styles from './TransactionFactory.module.css';

interface Props {
    data: Date,
    descricao: string,
    categoria: string,
    tipo: string,
    valor: string
}

const TransactionFactory = ({...props}: Props) => {
    const data = formatDate(props.data);
    const descricao = props.descricao;
    const categoria = props.categoria;
    const tipo = props.tipo;
    const valor = props.valor;

    return (
        <div className={styles.transaction}>
            <p id='p1' className={styles.transactionP}>{data}</p>
            <p id='p2' className={styles.transactionP}>{descricao}</p>
            <p id='p3' className={styles.transactionP}>{categoria}</p>
            <p id='p4' className={styles.transactionP}>{tipo}</p>
            <p id='p5' className={styles.transactionP}>{valor}</p>
        </div>
    )
}

export default TransactionFactory;