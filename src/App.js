import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
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

  return (
    <div>
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
    </div>
  );
};

export default App;
