// ExpenseForm.js

// import React, { useState } from 'react';
const ExpenseForm = ({ addExpense }) => {
    const [title, setName] = useState('');
    const [amount, setAmount] = useState('');

// Function to handle form submission
const handleSubmit = e => {
    e.preventDefault();
    if (title && amount) {
        const expense = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        amount: parseFloat(amount),
    };
    addExpense(expense);
    setTitle('');
    setAmount('');
    }
};

return (
    <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex mb-2">
            <input
                type="text"
                placeholder='Title'
                value={title}
                onChange={e => setName(e.target.value)}
                className="p-2 mr-2 flex-1"
            />
            <input
                type="number"
                placeholder='Amount'
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="p-2 flex-1"
            />
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add Expense
            </button>
        </form>

);
};
export default ExpenseForm;