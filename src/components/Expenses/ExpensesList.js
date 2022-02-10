import './ExpensesList.css'

import ExpenseItem from './ExpenseItem';

function ExpensesList({expenses}) {
    let displayExpenseItems = expenses.map(expense =>
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)

    if (expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    };

    return (
        <ul className='expenses-list'>
            {displayExpenseItems}
        </ul>
    )
}

export default ExpensesList