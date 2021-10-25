import React from "react";
import { useExpenses } from "../../hooks/useExpenses";

export default function Index() {
    const { bills, balance } = useExpenses();

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
