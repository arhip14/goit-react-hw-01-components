import React from 'react';
import Statistics from './statistics';
import data from '../data.json';
import './statisticsUse.css';

const App = () => {
  return (
    <div className="app">
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
