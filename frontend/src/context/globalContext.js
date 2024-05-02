"use client";

import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios.post(`${BASE_URL}/add-income`, income)
      .catch((error) => {
        setError(error.response.data.message);
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        income,
        setIncome,
        expenses,
        setExpenses,
        loading,
        setLoading,
        error,
        setError,
        addIncome
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