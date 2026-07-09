import { Router } from "express";

export const transactionRoutes = Router();

const transactions = [
    {
        id: '1',
        title: 'Salário',
        amount: 3000,
        type: 'income',
        category: 'Trabalho',
        date: '2026-07-02'
    },
    {
        id: '2',
        title: 'Mercado',
        amount: 120,
        type: 'expense',
        category: 'Alimentação',
        date: '2026-07-02'
    }
];

transactionRoutes.get('/', (req, res) => {
    return res.json(transactions);
});

transactionRoutes.post('/', (req, res) => {
    const { title, amount, type, category, date } = req.body;

    const transaction = {
        id: crypto.randomUUID(),
        title,
        amount,
        type,
        category,
        date
    };

    transactions.push(transaction);

    return res.status(201).json(transaction);
});