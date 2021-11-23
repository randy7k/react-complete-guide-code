import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter"
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState('2020');

  const filterExpenseData = selectedYear => {
    setEnteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear() === parseInt(enteredYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterExpenseData={filterExpenseData}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
