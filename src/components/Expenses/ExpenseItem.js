import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  const [title, setTitel] = useState(props.title);
   
  const clickHandler = () => {
    setTitel("Updated!");
    console.log("Updated!!")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Test</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
