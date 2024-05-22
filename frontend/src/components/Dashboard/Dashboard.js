"use client";

import Chart from '../Chart/Chart';
import { useGlobalContext } from '@/context/globalContext';

const Dashboard = () => {
  const { totalExpenses, totalIncome, totalBalance } = useGlobalContext();

  return (
    <>
      <div className="h-screen container mx-auto sm:px-6 lg:px-8 bg-white p-4">
        <Chart />
        <div className="mt-2">
          <div>
            <h2 className="text-xl font-medium text-gray-800">Total Income</h2>
            <p className="text-md font-normal text-gray-700">
              $ {totalIncome}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-800">Total Expenses</h2>
            <p className="text-md font-normal text-gray-700">
              $ {totalExpenses}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-800">Total Balance</h2>
            <p className="text-md font-normal text-gray-700">
              $ {totalBalance}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;