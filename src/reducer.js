import {
  ADD_EXPENSES,
  ADD_PURCHASE,
  ADD_GENERAL_SUM,
} from './actions';

let idCounter = 0;
let thisPurchase

const controlmoney = function (state = {}, action) {
  switch (action.type) {
    case ADD_GENERAL_SUM:
      return {
        generalSum: action.value,
        currentSum: action.value,
        isCurrentSumPositive: true,
        expenses: [],
      };
    case ADD_EXPENSES:
      if (state.currentSum - action.value < 0) {
        return { ...state, isCurrentSumPositive: false };
      }

      return {
        generalSum: state.generalSum,
        currentSum: state.currentSum - action.value,
        isCurrentSumPositive: true,
        expenses: [
          ...state.expenses,
          {
            id: ++idCounter,
            value: action.value,
            name: action.name,
            isExpensePositive: true,
            purchases: [],
          },
        ],
      };
    case ADD_PURCHASE:
      return {
        currentSum: state.currentSum,
        isCurrentSumPositive: state.isCurrentSumPositive,
        expenses: state.expenses.map((expense) => {
          if (action.expenseId === expense.id) {
            if (expense.value - action.value < 0) {
              thisPurchase = { ...expense, isExpensePositive: false };
              return thisPurchase;
            }

            thisPurchase = {
              id: expense.id,
              value: expense.value - action.value,
              name: expense.name,
              isExpensePositive: expense.isExpensePositive,
              purchases: [
                ...expense.purchases,
                {
                  value: action.value,
                  name: action.name,
                },
              ],
            };

            return thisPurchase;
          }
          return expense;
        }),
        generalSum: thisPurchase.isExpensePositive
          ? (state.generalSum - action.value) : state.generalSum,
      };
    default:
      return state;
  }
};

export default controlmoney;
