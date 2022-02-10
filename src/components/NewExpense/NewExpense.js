import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)

    function handleShowForm() {
        setShowForm(prevState => !prevState)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    return (
    <div className='new-expense'>
        {!showForm && (<button onClick={handleShowForm}>Add New Expense</button>)}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleShowForm}/>}
    </div>
    );
};

export default NewExpense;