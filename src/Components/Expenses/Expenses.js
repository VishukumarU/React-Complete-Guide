import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../Helper-UI/Card';
import './Expenses.css'
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);
    return (
        <li className='expenses-list-style'>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onChangeYear={yearChangeHandler} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;