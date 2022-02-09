import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './ExpensesContainer.css'

function ExpensesContainer({expenses}) {
    const displayExpenseItems = expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)

    return (
        <Card className="expenses">
            {displayExpenseItems}
        </Card>
    )
};

export default ExpensesContainer;