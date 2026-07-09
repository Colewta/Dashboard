import { categoriasEntradas, entradas, categoriasSaidas, saidas } from "./EntradasSaidas";
import styles from './Form.module.css';

interface OptionProps {
    opcao: 'entrada' | 'saida'
}

const OptionsFactory = ({opcao}: OptionProps) => {
    const categorias = opcao === 'entrada' ? categoriasEntradas : categoriasSaidas;
    const lista = opcao === 'entrada' ? entradas : saidas;

    return (
        <select className={styles.select}>
        {categorias.map(categoria => (
            <optgroup
            className={styles.optgroup}
            key={categoria.categoria}
            label={`${categoria.icone} ${categoria.categoria}`}
            >
            {lista
                .filter(entrada => entrada.categoria === categoria.categoria)
                .map(entrada => (
                <option className={styles.option} key={entrada.nome}>
                    {`${entrada.icone} ${entrada.nome}`}
                </option>
                ))}
            </optgroup>
        ))}
        </select>
    )
}

export default OptionsFactory;