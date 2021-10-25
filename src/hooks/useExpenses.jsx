import { useContext } from "react";
import { ExpensesContext } from "../contexts/expensesContext";

export function useExpenses() {
    const value = useContext(ExpensesContext);
    return value;
}
