import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Topbar from './Topbar';
import AddExpenses from './AddExpenses';
import ExpensesList from './ExpensesList';
import RefreshButton from './RefreshButton';

import { decrementAmountOfDays, addLastLoginDate } from '../store/actions';

import {
  AppState,
  decrementAmountOfDaysAction,
  addLastLoginDateAction,
} from '../store/types';

interface AppProps {
  lastLoginDate: number | null,
  decrementAmountOfDays: (value: number) => decrementAmountOfDaysAction,
  addLastLoginDate: (value: number | null) => addLastLoginDateAction
}

function App({
  lastLoginDate,
  decrementAmountOfDays,
  addLastLoginDate
}: AppProps): JSX.Element {

  useEffect(() => {
    console.log('lld: '+ lastLoginDate);

    const loginDate: number = new Date().getTime() / (24 * 60 * 60 * 1000);
    console.log('ld: ' + loginDate);

    if (lastLoginDate && lastLoginDate !== loginDate) {
      decrementAmountOfDays(parseInt((loginDate - (lastLoginDate as number)).toFixed(), 10));
    }
    return () => { addLastLoginDate(loginDate); }
  }, []);

  return (
    <>
    <RefreshButton/>
    <div className="App wrapper">
      <Topbar/>
      <AddExpenses/>
      <ExpensesList/>
    </div>
    </>
  );
}

const mapState = (state: AppState) => ({
  lastLoginDate: state.lastLoginDate,
});

const mapDispatchToProps = {
  decrementAmountOfDays,
  addLastLoginDate,
};

const AppContainer = connect(
  mapState,
  mapDispatchToProps,
)(App);

export default AppContainer;
