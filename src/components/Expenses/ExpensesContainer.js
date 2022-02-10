import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import './ExpensesContainer.css'

function ExpensesContainer({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    function changeFilterHandler(year) {
        setFilteredYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    )
};

export default ExpensesContainer;