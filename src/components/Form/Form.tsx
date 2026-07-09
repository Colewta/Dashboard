import { useState } from 'react';
import styles from './Form.module.css';
import OptionsFactory from './OptionsFactory';
import ModalPortal from '../../ModalPortal';
import { formatDateInput } from '../../utils/trataData';

interface FormProps {
    onClose: () => void
}

const Form = ({onClose}: FormProps) => {
    const [tipo, setTipo] = useState<'entrada' | 'saida'>('entrada');
    const [data, setData] = useState<string>(formatDateInput(new Date()));
    const [mouseDownInside, setMouseDownInside] = useState(false);

    return (
        <ModalPortal>
            <div
                className={styles.overlay}
                onMouseDown={() => setMouseDownInside(false)}
                onClick={() => {
                    if(!mouseDownInside) onClose();
                }}
            >
                <div
                    className={styles.form}
                    onMouseDown={e => {
                        e.stopPropagation();
                        setMouseDownInside(true);
                    }}
                >
                    <div className={styles.formHeader}>
                        <h1 className={styles.formTitle}>Nova Transação</h1>
                        <button onClick={onClose} className={styles.btnX}>X</button>
                    </div>

                    <div className={styles.inputLabel}>
                        <label className={styles.label}>Tipo</label>
                        <div className={styles.btnInOut}>
                            <button
                                onClick={() => setTipo('entrada')}
                                className={`${styles.btnIn} ${styles.btnForm} ${
                                    tipo === 'entrada' ? styles.btnInActive : ''
                                }`}
                            >Entrada</button>

                            <button
                                onClick={() => setTipo('saida')}
                                className={`${styles.btnOut} ${styles.btnForm} ${
                                    tipo === 'saida' ? styles.btnOutActive : ''
                                }`}
                            >Saída</button>
                        </div>
                    </div>

                    <div className={styles.inputLabel}>
                        <label htmlFor='description' className={styles.label}>Descrição</label>
                        <input placeholder='Ex: Salário, Aluguel, Compras...' id='description' type='text' className={styles.input} />
                    </div>

                    <div className={styles.inputLabel}>
                        <label className={styles.label}>Categoria</label>
                        <OptionsFactory opcao={tipo} />
                    </div>

                    <div className={styles.moneyInput}>
                        <label htmlFor='valor' className={styles.label}>Valor</label>
                        <div className={styles.divValor}>
                            <span className={styles.prefix}>R$</span>
                            <input placeholder='0,00' id='valor' type='text' className={`${styles.inputValor}`} />
                        </div>
                    </div>

                    <div className={styles.inputLabel}>
                        <label htmlFor='date' className={styles.label}>Data</label>
                        <input
                            className={`${styles.date} ${styles.input}`}
                            id='date'
                            type='date'
                            value={data}
                            onChange={e => setData(e.target.value)}
                        />    
                    </div>

                    <div className={styles.footer}>
                        <button onClick={onClose}
                            className={`${styles.btnFooter} ${styles.btnCancela}`}
                        >Cancelar</button>

                        <button
                            className={`${styles.btnFooter} ${
                                tipo === 'entrada' ? styles.btnInActive : styles.btnOutActive
                            }`}
                            type='submit'
                        >Salvar</button>
                    </div>
                </div>
            </div>
        </ModalPortal>
    )
}

export default Form;