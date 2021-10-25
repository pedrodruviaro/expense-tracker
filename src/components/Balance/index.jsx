import React, { useContext } from "react";
import { ExpensesContext } from "../../contexts/expensesContext";

export default function Index() {
    const { bills, balance } = useContext(ExpensesContext);

    return (
        <div className="cards">
            <div className="card">SALDO</div>
            <div className="card">
                CONTAS
                <span>{bills && bills}</span>
            </div>
            <div className="card">
                BALANCO
                <span>{balance && balance}</span>
            </div>
        </div>
    );
}
