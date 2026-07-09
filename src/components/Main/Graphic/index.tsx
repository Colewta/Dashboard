import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './Graphic.module.css';

const Graphic = () => {
    const transacoes = [
        { tipo: 'entrada', valor: 1000, data: '2026-03-01' },
        { tipo: 'saida', valor: 200, data: '2026-03-01' },
        { tipo: 'entrada', valor: 500, data: '2026-03-02' },
        { tipo: 'saida', valor: 300, data: '2026-03-02' },
    ];

    return (
        <div className={styles.graphicDiv}>
            <div className={styles.graphicText}>
                <h1 className={styles.graphicH1}>Fluxo de caixa</h1>
                <p className={styles.graphicP}>Comparação entre entradas e saídas ao longo do mês</p>
            </div>
            
            <ResponsiveContainer width="100%" height={300} className={styles.container}>
                <LineChart data={transacoes}>
                    <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />

                    <XAxis dataKey="data" />
                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="entrada"
                        stroke="#16a34a" // verde
                        strokeWidth={2}
                    />

                    <Line
                        type="monotone"
                        dataKey="saida"
                        stroke="#dc2626" // vermelho
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Graphic;