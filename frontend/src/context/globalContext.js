"use client";

import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios.post(`${BASE_URL}/add-income`, income)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncomes();
  }

  const getIncomes = async () => { 
    const response = await axios.get(`${BASE_URL}/get-incomes`)
      setIncomes(response.data);
  }

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}/delete-income/${id}`)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncomes();
  }

  const totalIncome = incomes.reduce((acc, item) => (acc += parseInt(item.amount)), 0);

  const addExpense = async (expense) => {
    const response = await axios.post(`${BASE_URL}/add-expense`, expense)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getExpenses();
  }

  const getExpenses = async () => { 
    const response = await axios.get(`${BASE_URL}/get-expenses`)
      setExpenses(response.data);
  }

  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getExpenses();
  }

  const totalExpenses = expenses.reduce((acc, item) => (acc += parseInt(item.amount)), 0);

  const totalBalance = totalIncome - totalExpenses;

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
        totalBalance
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