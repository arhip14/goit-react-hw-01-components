import React from 'react';
import Profile from './profile';
import Statistics from './statistic/statistics';
import FriendList from './friendList/friendList';
import TransactionHistory from './transactionHistory';
import user from '../json-info/user.json';
import data from '../json-info/data.json';
import friends from '../json-info/friends.json';
import transactions from '../json-info/transactions.json';
import '../index.css';

const App = () => {
  return (
    <div className="app">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
    </div>
  );
};
export default App;