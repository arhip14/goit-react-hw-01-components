import React from 'react';
import TransactionHistory from './transactionHistory';
import transactions from '../json-info/transactions.json'

const YourMainComponent = () => {
  return (
    <div>
      <h1>Transaction History</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default YourMainComponent;