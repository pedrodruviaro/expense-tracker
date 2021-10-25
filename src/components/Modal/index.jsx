import React, { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useExpenses } from "../../hooks/useExpenses";

export default function Index({ setIsOpen }) {
    const [open, setOpen] = useState(true);
    const [expenseName, setExpenseName] = useState("");
    const [expenseValue, setExpenseValue] = useState("");

    const { addExpense } = useExpenses();

    let domNode = useClickOutside(() => {
        setOpen(false);
        setIsOpen(false);
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (expenseName.trim() === "") return;

        const expense = {
            expenseName,
            expenseValue: parseFloat(expenseValue),
        };

        addExpense(expense);

        setOpen(false);
        setIsOpen(false);
    }

    return (
        <div className={open ? "modal open" : "modal"} ref={domNode}>
            <h3>Nova Despesa</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Expense Name"
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={expenseValue}
                    onChange={(e) => setExpenseValue(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
