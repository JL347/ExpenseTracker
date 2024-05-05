"use client"; 

import { useGlobalContext } from '../../../context/globalContext';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../../Button/Button';
import DefaultDialog from '../../Dialog/DefaultDialog';

export default function AddExpenseModal({ open, close }) {
  const {
    addExpense,
    getExpenses,
  } = useGlobalContext();
  const [input, setInput] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = input;

  const handleInput = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(input);
    setInput({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });
    close();
  }

  return (
    <DefaultDialog
      open={open}
      setOpen={close}
      title="Add Expense"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden">
            <div>
              <ul role="list" className="divide-y divide-gray-200">
                <li className="px-6 py-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                      Expense Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        placeholder="Enter the title of the expense"
                        onChange={handleInput('title')}
                      />
                    </div>
                  </div>
                </li>
                <li className="px-6 py-4">
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                      Amount
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="amount"
                        id="amount"
                        value={amount}
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        placeholder="Enter the amount of the expense"
                        onChange={handleInput('amount')}
                      />
                    </div>
                  </div>
                </li>
                <li className="px-6 py-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                      Date
                    </label>
                    <div className="mt-2">
                      <DatePicker
                        id='date'
                        selected={date}
                        onChange={(date) => {
                          setInput({ ...input, date: date });
                        }} 
                        placeholderText='Enter the current date'
                        dateFormat="MM/dd/yyyy"
                        showIcon
                      />
                    </div>
                  </div>
                </li>
                <li className="px-6 py-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                      Category
                    </label>
                    <div className="mt-2">
                      <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleInput('category')}
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      >
                        <option value="" disabled>Select Option</option>
                        <option value="groceries">Groceries</option>
                        <option value="general">General</option>
                        <option value="gas">Gas</option>
                        <option value="utilities">Utilities</option>
                        <option value="internet">Internet</option>
                        <option value="maggie">Maggie</option>
                        <option value="mortgage">Mortgage</option>
                        <option value="home">Home Expenses</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li className="px-6 py-4">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        name="description"
                        id="description"
                        value={description}
                        onChange={handleInput('description')}
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter a description"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleSubmit}
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
    </DefaultDialog>
  );
};