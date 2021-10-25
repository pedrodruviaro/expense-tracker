import React, { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function Index({ setIsOpen }) {
    const [open, setOpen] = useState(true);

    let domNode = useClickOutside(() => {
        setOpen(false);
        setIsOpen(false);
    });

    return (
        <div className={open ? "modal open" : "modal"} ref={domNode}>
            <h3>Nova Despesa</h3>
            <form>
                <input type="text" placeholder="Expense Name" />
                <input type="number" placeholder="Amount" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
