// App.js

import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css';

function App() {
    const [expenses, setExpenses] = useState([]);

    // Function to add new expense
    const addExpense = expense => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-center font-bold text-gray-800">Expense Tracker</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default App;