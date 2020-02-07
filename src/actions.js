// ACTION TYPES

export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_PURCHASE = 'ADD_PURCHASE';
export const ADD_GENERAL_SUM = 'ADD_GENERAL_SUM';

// ACTION CREATORS

export function addExpenses(value, name) {
  return { type: ADD_EXPENSES, value, name };
}

export function addPurchase(expenseId, value, name) {
  return {
    type: ADD_PURCHASE, expenseId, value, name,
  };
}

export function addGeneralSum(value) {
  return { type: ADD_GENERAL_SUM, value };
}
