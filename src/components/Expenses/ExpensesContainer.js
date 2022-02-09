import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import './ExpensesContainer.css'

function ExpensesContainer({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const displayExpenseItems = expenses.map(expense => <ExpenseItem key={expense.title} title={expense.title} amount={expense.amount} date={expense.date} />)

    function changeFilterHandler(year) {
        setFilteredYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            {displayExpenseItems}
        </Card>
    )
};

export default ExpensesContainer;