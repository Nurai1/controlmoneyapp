import {
  ADD_EXPENSES,
  ADD_PURCHASE,
  ADD_GENERAL_SUM
} from './actions'

let idCounter=0;

const controlmoney = function (state = {}, action) {
  switch(action.type){
    case ADD_GENERAL_SUM:
      return {
          generalSum: action.value,
          expenses: []
        }
    case ADD_EXPENSES:
      return {
          generalSum: state.generalSum - action.value,
          expenses: [
            ...state.expenses,
            {
              id: ++idCounter,
              value: action.value,
              name: action.name,
              purchases: []
            }
          ]
        }
    case ADD_PURCHASE:
      return {
          generalSum: state.generalSum - action.value,
          expenses: state.expenses.map((expense) => {
            if (action.expenseId === expense.id){
              return {
                  id: expense.id,
                  value: expense.value - action.value,
                  name: expense.name,
                  purchases: [
                    ...expense.purchases,
                    {
                      value: action.value,
                      name: action.name
                    }
                  ]
                }
              }
            return expense;
          })
        }
    default:
      return state
  }
}

export default controlmoney
