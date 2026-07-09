export function formatDateInput(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function formatDate(date: Date): string {
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
}