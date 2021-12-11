import React from 'react';
import { useState } from 'react/cjs/react.development';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isediting,setIsEditing]=useState(false);

  const startEditing=()=>{
    setIsEditing(true);
  }

  const stopEditing=()=>{
    setIsEditing(false);
  }


  return (
    <div className='new-expense'>
      <div></div>
      {!isediting && <div className='new-expense-button'><button onClick={startEditing}>ADD NEW EXPENSE</button></div>}
      {isediting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  cancel={stopEditing} />}
    </div>
  );
};

export default NewExpense