import React from 'react';

import Header from './Header'
import AddExpenses from './AddExpenses'
import ExpensesList from './ExpensesList'

function App() {
  return (
    <div className="App">
      <Header />
      <AddExpenses />
      <ExpensesList />
    </div>
  );
}

export default App;
