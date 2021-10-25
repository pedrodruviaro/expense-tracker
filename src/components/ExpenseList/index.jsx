import React, { useContext } from "react";
import { ExpensesContext } from "../../contexts/expensesContext";

export default function Index() {
    const { expenses } = useContext(ExpensesContext);

    return (
        <div>
            <ul>
                {expenses &&
                    expenses.map((item) => (
                        <li key={item.id}>
                            <span style={{ marginRight: "1rem" }}>
                                {item.expenseName}
                            </span>
                            <span>{item.expenseValue}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
