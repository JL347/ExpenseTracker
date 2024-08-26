"use client";

import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const BASE_URL = 'https://expensetracker-backend-0au2.onrender.com';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios.post(`${BASE_URL}/api/v1/add-income`, income)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncomes();
  }

  const getIncomes = async () => { 
    const response = await axios.get(`${BASE_URL}/api/v1/get-incomes`)
    setIncomes(response.data);
    
    console.log(response)
  }

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}/api/v1/delete-income/${id}`)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncomes();
  }

  const totalIncome = incomes.reduce((acc, item) => (acc += parseInt(item.amount)), 0);

  const addExpense = async (expense) => {
    const response = await axios.post(`${BASE_URL}/api/v1/add-expense`, expense)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getExpenses();
  }

  const getExpenses = async () => { 
    const response = await axios.get(`${BASE_URL}/api/v1/get-expenses`)
    setExpenses(response.data);
    
    console.log(response)
  }

  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}/api/v1/delete-expense/${id}`)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getExpenses();
  }

  const totalExpenses = expenses.reduce((acc, item) => (acc += parseInt(item.amount)), 0);

  const totalBalance = totalIncome - totalExpenses;

  const transactionHistory = () => {
    return [...incomes, ...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  return (
    <GlobalContext.Provider
      value={{
        incomes,
        setIncomes,
        expenses,
        setExpenses,
        getExpenses,
        totalExpenses,
        deleteExpense,
        addExpense,
        loading,
        setLoading,
        error,
        setError,
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        totalBalance,
        transactionHistory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
}