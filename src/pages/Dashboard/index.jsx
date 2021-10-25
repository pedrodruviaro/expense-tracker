import React, { useState } from "react";
import Balance from "../../components/Balance";
import ExpenseList from "../../components/ExpenseList";
import Modal from "../../components/Modal";

export default function Index() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h2>Dashboard</h2>
            <Balance />
            <button onClick={() => setIsOpen((open) => !open)}>
                Adiciona Nova Despesa
            </button>
            <ExpenseList />

            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    );
}
