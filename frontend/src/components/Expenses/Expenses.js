"use client"; 

import { useGlobalContext } from '../../context/globalContext';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import AddExpenseModal from './components/AddExpenseModal';
import dayjs from 'dayjs';

const Expenses = () => {
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState({ open: false, expense: null });

  const {
    expenses,
    getExpenses,
    deleteExpense,
    totalExpenses,
  } = useGlobalContext();

  const handleOpenAddExpenseModal = (expense) => {
    setOpenAddExpenseModal({ open: true,expense })
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold leading-6 text-gray-900">Expenses</h1>
            <p className="mt-2 text-sm text-gray-700">
              Total Expenses: ${totalExpenses}
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              onClick={() => handleOpenAddExpenseModal()}
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Expense
            </Button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Amount
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Category
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {expenses.map((expense) => (
                      <tr key={expense.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {expense.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{expense.amount}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{expense.category}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {dayjs(expense.date).format('MMM DD, YYYY')}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{expense.description}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className="text-sky-600 hover:text-sky-900">
                            Edit<span className="sr-only">, {expense.title}</span>
                          </a>
                          <a 
                            className="text-sky-600 hover:text-sky-900 ml-2 cursor-pointer"
                            onClick={() => deleteExpense(expense._id)}
                          >
                            Delete<span className="sr-only">, {expense.title}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AddExpenseModal
        open={openAddExpenseModal.open}
        close={() =>
          setOpenAddExpenseModal({
            open: false,
            expense: null,
          })
        }
      />
    </>
  );
};

export default Expenses;