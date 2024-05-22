"use client";

import { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '@/context/globalContext';
import dayjs from 'dayjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const {
    incomes,
    expenses,
    getIncomes,
    getExpenses,
  } = useGlobalContext();
  
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const data = {
    labels: incomes.map((income) => {
      const { date } = income;
      return dayjs(date).format('MMMM DD, YYYY');
    }),

    datasets: [
      {
        label: 'Income',
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          })
        ],
        backgroundColor: 'green',
        borderColor: 'green',
        tension: .2,
      },
      {
        label: 'Expenses',
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          })
        ],
        backgroundColor: 'red',
        borderColor: 'red',
        tension: .2,
      }
    ]
  }

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Chart;