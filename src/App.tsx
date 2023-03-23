import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
    const expenseCategory = ["Groceries", "Utilities", "Entertainment"];

    const [expenses, setExpenses] = useState([
        { description: "Milk", amount: 5, category: "Groceries", show: true },
        { description: "Gas", amount: 15, category: "Utilities", show: true },
        {
            description: "Beer",
            amount: 3,
            category: "Entertainment",
            show: true,
        },
        { description: "Bread", amount: 2, category: "Groceries", show: true },
        {
            description: "Cinema",
            amount: 4,
            category: "Entertainment",
            show: true,
        },
        {
            description: "Electricity",
            amount: 12,
            category: "Utilities",
            show: true,
        },
    ]);

    const deleteExpenses = (obj: object) => {
        setExpenses(expenses.filter((item) => item !== obj));
    };

    const filterExpenses = (filter: string) => {
        setExpenses(
            expenses.map((item) =>
                item.category === filter || filter === ""
                    ? { ...item, show: true }
                    : { ...item, show: false }
            )
        );
    };

    const addExpense = (d: {}) => {
        console.log(d);
        setExpenses([...expenses, { ...d, show: true }]);
    };

    return (
        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <h2>Expense Tracker</h2>
                        <p className="lead">Fill out your expenses</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="mb-3 text-primary">New expense:</h4>
                            <ExpenseForm
                                categories={expenseCategory}
                                addExpense={addExpense}
                            />
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <ExpenseFilter
                                categories={expenseCategory}
                                onChange={filterExpenses}
                            />

                            <ExpenseList
                                items={expenses}
                                onDelete={deleteExpenses}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
