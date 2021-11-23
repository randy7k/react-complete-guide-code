import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: 2,
    title: "Car insurance",
    amount: 399.9,
    date: new Date(2020, 5, 8),
  },
  {
    id: 3,
    title: "New Cellphone",
    amount: 999.99,
    date: new Date(2020, 1, 1),
  },
  {
    id: 4,
    title: "Laptop",
    amount: 1400.6,
    date: new Date(2021, 7, 4),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => { 
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
