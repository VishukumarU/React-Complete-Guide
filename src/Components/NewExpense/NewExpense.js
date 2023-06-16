import { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const btnToggleFormHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='new-expense'>
            {showForm && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} closeForm={btnToggleFormHandler} />}
            {!showForm && <button type='button' onClick={btnToggleFormHandler} >Add New Expense</button>}
        </div>
    );
};

export default NewExpense;