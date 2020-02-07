import React from 'react';

import Topbar from './Topbar';
import AddExpenses from './AddExpenses';
import ExpensesList from './ExpensesList';

function App() {
  return (
    <div className="App">
      <Topbar />
      <AddExpenses />
      <ExpensesList />
    </div>
  );
}

export default App;
