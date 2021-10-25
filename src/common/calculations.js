export function sumExpenses(array) {
    let total = 0;

    array.forEach((obj) => {
        total += obj.expenseValue;
    });

    return total;
}
