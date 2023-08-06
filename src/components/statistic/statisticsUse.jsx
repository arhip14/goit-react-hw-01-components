import React from 'react';
import data from '../json-info/data.json';

const App = () => {
  return (
    <div className="app">
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
