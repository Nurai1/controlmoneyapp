import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import App from './components/App';
import Purchase from './components/Purchase';

const Main = ({ store }) => {
  return (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/:expenseId" component={Purchase} />
    </Router>
  </Provider>
  )
}





export default Main;
