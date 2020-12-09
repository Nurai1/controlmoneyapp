import {
  ADD_EXPENSES,
  ADD_PURCHASE,
  ADD_INITIAL_VALUES,
  DECREMENT_AMOUNT_OF_DAYS,
  ADD_LAST_LOGIN_DATE,
} from './constants';
import {
  addExpenseAction,
  addPurchaseAction,
  addInitialValuesAction,
  decrementAmountOfDaysAction,
  ExpensePayload,
  PurchasePayload,
  initialValuesPayload,
  addLastLoginDateAction,
} from './types';

// ACTION CREATORS

export function addExpenses(payload: ExpensePayload): addExpenseAction {
  return { type: ADD_EXPENSES, payload};
}

export function addPurchase(payload: PurchasePayload): addPurchaseAction {
  return {
    type: ADD_PURCHASE,
    payload,
  };
}

export function addInitialValues(payload: initialValuesPayload): addInitialValuesAction {
  return { type: ADD_INITIAL_VALUES, payload };
}

export function decrementAmountOfDays(value: number): decrementAmountOfDaysAction {
  return { type: DECREMENT_AMOUNT_OF_DAYS, value };
}

export function addLastLoginDate(value: number | null): addLastLoginDateAction {
  return { type: ADD_LAST_LOGIN_DATE, value }
}
