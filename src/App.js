import ExpensesContextProvider from "./contexts/expensesContext";
import Dashboard from "./pages/Dashboard";
import "./styles.css";

function App() {
    return (
        <ExpensesContextProvider>
            <Dashboard />
        </ExpensesContextProvider>
    );
}

export default App;
