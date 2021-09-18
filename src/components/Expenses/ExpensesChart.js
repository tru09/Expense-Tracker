import React from "react";
import Charts from '../Charts/Charts';

const ExpensesChart=props=>{
    const ExpenseMonth=[
        {label:'Jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'June',value:0},
        {label:'July',value:0},
        {label:'Aug',value:0},
        {label:'Sept',value:0},
        {label:'oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ]

    for(const expense of props.expenses){
        const expenseMonth=expense.date.getMonth();
        ExpenseMonth[expenseMonth].value +=expense.amount;
    }
    return <Charts datapointer={ExpenseMonth}></Charts>

    

}


export default ExpensesChart;
