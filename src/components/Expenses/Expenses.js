import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
  const expenses = props.expenses;

  const [enteredYear, setEnteredYear] = useState('2020');

  const filterExpenseData = selectedYear => {
    // console.log("Expenses.js");
    // console.log(selectedYear);
    setEnteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterExpenseData={filterExpenseData}/>
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        id={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
