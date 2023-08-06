import React from 'react';
import Profile from './profile';
import Statistics from './statistic/statistics';
import FriendList from './friendsList';
import TransactionHistory from './transaction/transactionHistory';
import user from '../components/json-info/user.json';
import data from '../components/json-info/data.json'
import friends from '../components/json-info/friends.json';
import transactions from '../components/json-info/transactions.json'; 
import '../index.css';

export const App = () => {
  return (
    <div className="app">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> {}
    </div>
  );
};
export default App;
