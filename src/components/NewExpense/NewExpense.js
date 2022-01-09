import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = { 
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const changeEditingHandler = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className="new-expense">
      { !isEditing && <button onClick={changeEditingHandler}>Add New Expense</button>}
      { isEditing && (
        <ExpenseForm 
          onSaveExpenseData={saveExpenseData} 
          onCancel={changeEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
