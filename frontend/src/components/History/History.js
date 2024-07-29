"use client";

import { useGlobalContext } from '@/context/globalContext';
import dayjs from 'dayjs';

const History = () => {
  const { transactionHistory } = useGlobalContext();

  return (
    <>
      <h2 className="text-xl font-medium text-gray-800">Recent History</h2>
      <ul role="list" className="divide-y divide-gray-100">
        {transactionHistory.map((transaction) => (
          <li key={transaction.id} className="py-4">
            <div className="flex items-center gap-x-3">
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{transaction.title}</h3>
              <time dateTime={transaction.date} className="flex-none text-xs text-gray-500">
                {dayjs(transaction.date).format("MMMM DD, YYYY")}
              </time>
            </div>
            <p className="mt-3 truncate text-sm">
              <span className="text-gray-700">{transaction.description}</span><br />
              <span className="text-gray-700">$ {transaction.amount}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;