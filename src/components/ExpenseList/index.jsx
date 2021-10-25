import React from "react";
import { useExpenses } from "../../hooks/useExpenses";

export default function Index() {
    const { expenses } = useExpenses();

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
