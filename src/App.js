import React, { useEffect, useState } from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

let Dummy_expense =[]

const App = () => {

    
    const [expenses,setExpenses] = useState(Dummy_expense);

    useEffect(()=>{

        fetch('http://localhost/sample-api/api/read.php').then(
        response => {
            return response.json();
        }
        ).then(
            data => {
                setExpenses(data);
            }
        )

    },[])

    

    const childtoapp = (dataagya) => {
        const updatedexpense = [dataagya,...expenses]
        setExpenses(updatedexpense);
    }

  return (
    <div>
        <h1>Let's Get Started!!</h1>
        <NewExpense lelo = {childtoapp}/>
        <Expenses item = {expenses}/>
        
    </div>
   
  )
}

export default App