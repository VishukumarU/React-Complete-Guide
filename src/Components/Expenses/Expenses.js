import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../Helper-UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (year) => {
        console.log(year);
        setSelectedYear(year);
    };


    const { expenses } = props;
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onChangeYear={yearChangeHandler} />
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;