import React from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'


const App = () => {

    let expenses =[
        {
            id:'e1',
            title:"Silai ka kharch",
            amount:1200,
            date:new Date(2023,2,10)

        },
        {
            id:'e2',
            title:"dudh ka kharch",
            amount:200,
            date:new Date(2023,5,12)

        },
        {
            id:'e3',
            title:"school ka kharch",
            amount:1800,
            date:new Date(2023,6,1)

        },
        {
            id:'e4',
            title:"ghar ka kharch",
            amount:9000,
            date:new Date(2023,2,12)

        }

    ]

  return (
    <div>
        <h1>Let's Get Started!!</h1>
        <NewExpense/>
        <Expenses item = {expenses}/>
        
    </div>
   
  )
}

export default App