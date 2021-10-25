import { createContext, useEffect, useState } from 'react'
import { sumExpenses } from '../common/calculations'
import {api} from '../services/api'

export const ExpensesContext = createContext()
ExpensesContext.displayName = "Expenses Context"



export default function ExpensesContextProvider({ children }) {
    const [expenses, setExpenses] = useState([])
    const [bills, setBills] = useState(0)

    // getting data
    useEffect(() => { 
        console.log('montou');
        (async () => {
            const {data} = await api.get('/expenses')
            setExpenses(data)
        })()
    }, [])

    // somando valores
    useEffect(() => {
        const values = sumExpenses(expenses)
        setBills(values)
    }, [expenses])


    async function addExpense(expense){
        try {
            const {data} = await api.post('/expenses', expense)
            const newArr = [...expenses, data]
            setExpenses(newArr)
        } catch(error){
            console.error(error.response)
        }
        
    }

    return (
        <ExpensesContext.Provider value={{ expenses, addExpense, bills }}>
            { children }
        </ExpensesContext.Provider>
    )
}
