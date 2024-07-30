"use client";

import Chart from '../Chart/Chart';
import { useGlobalContext } from '@/context/globalContext';
import History from '../History/History';

const Dashboard = () => {
  const { totalExpenses, totalIncome, totalBalance, getExpenses, getIncomes } = useGlobalContext();

  return (
    <>
      <div className="h-screen">
        <div className="rounded-md bg-white p-2 mx-auto">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Chart />
            </div>
            <div>
              <History />
            </div>
          </div>
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
      </div>
    </>
  );
};

export default Dashboard;