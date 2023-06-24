// ExpenseList.js

import React from 'react';
const ExpenseList = ({ expenses }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Expenses</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id} className="mb-2">
                        <span>{expense.title}</span>
                        <span className="ml-2">${expense.amount.toFixed(2)}</span>
                        </li>
                ))}
            </ul>   
        </div>
    );
};

export default ExpenseList;