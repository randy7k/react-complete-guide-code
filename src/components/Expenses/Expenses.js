import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState('2020');

  const filterExpenseData = selectedYear => {
    setEnteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterExpenseData={filterExpenseData}/>
      {props.expenses
        .filter(expense => expense.date.getFullYear().toString() === enteredYear)
        .map(expense => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount}
          date={expense.date} />    
      ))}
    </Card>
  );
};

export default Expenses;
