import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = () => {

    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");


    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);

    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);

    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);      

    }


  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="Date" onChange={dateChangeHandler}></input>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm