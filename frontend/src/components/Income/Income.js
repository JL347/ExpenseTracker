"use client"; 

import { useGlobalContext } from '../../context/globalContext';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Income = () => {
  const { addIncome } = useGlobalContext();
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
    addIncome(input);
    setInput({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Add Income</h1>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden rounded-md bg-white shadow p-2">
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              <li className="px-6 py-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Job Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your Job Title"
                      onChange={handleInput('title')}
                    />
                  </div>
                </div>
              </li>
              <li className="px-6 py-4">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                    Salary Amount
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      value={amount}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your yearly salary amount"
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
                    Job Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      name="category"
                      value={category}
                      onChange={handleInput('category')}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    >
                      <option value="" disabled>Select Option</option>
                      <option value="salary">Salary</option>
                      <option value="investments">Investments</option>
                      <option value="rover">Rover</option>
                      <option value="freelancing">Freelancing</option>
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
                      defaultValue={'Enter a brief description for this input'}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={handleSubmit}
            >
              Add Income
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Income;