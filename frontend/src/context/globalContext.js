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
  }

  const getIncomes = async () => { 
    const response = await axios.get(`${BASE_URL}/get-incomes`)
      setIncomes(response.data)
      // .catch((error) => {
      //   setError(error.response.data.message);
      // });
      console.log(response.data)
  }

  return (
    <GlobalContext.Provider
      value={{
        incomes,
        setIncomes,
        expenses,
        setExpenses,
        loading,
        setLoading,
        error,
        setError,
        addIncome,
        getIncomes,
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