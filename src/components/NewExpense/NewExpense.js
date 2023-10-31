import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const childtoparent= (data)=>{
    const expenseData = {
      ...data,
      id:Math.random().toString(),
    }

    props.lelo(expenseData);
      console.log(expenseData);
  }

  return (
    <div className='new-expense'>
        <ExpenseForm childtopara = {childtoparent}/>
    </div>
  )
}

export default NewExpense