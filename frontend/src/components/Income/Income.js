"use client"; 

import { useGlobalContext } from '../../context/globalContext';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import AddIncomeModal from './components/AddIncomeModal';
import dayjs from 'dayjs';

const Income = () => {
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState({ open: false, income: null });

  const {
    incomes,
    getIncomes,
    deleteIncome,
  } = useGlobalContext();

  const handleOpenAddIncomeModal = (income) => {
    setOpenAddIncomeModal({ open: true,income })
  }

  useEffect(() => {
    getIncomes();
  }, [incomes]);

  return (
    <>
      <div>
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold leading-6 text-gray-900">Income</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the incomes you have added.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              onClick={() => handleOpenAddIncomeModal()}
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Income
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
                    {incomes.map((income) => (
                      <tr key={income.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {income.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{income.amount}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{income.category}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {dayjs(income.date).format('DD/MM/YYYY')}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{income.description}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className="text-blue-600 hover:text-blue-900">
                            Edit<span className="sr-only">, {income.title}</span>
                          </a>
                          <a 
                            className="text-blue-600 hover:text-blue-900 ml-2 cursor-pointer"
                            onClick={() => {
                              deleteIncome(income._id),
                              getIncomes()
                            }}
                          >
                            Delete<span className="sr-only">, {income.title}</span>
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
      
      <AddIncomeModal
        open={openAddIncomeModal.open}
        close={() =>
          setOpenAddIncomeModal({
            open: false,
            income: null,
          })
        }
      />
    </>
  );
};

export default Income;