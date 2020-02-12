import * as actions from '../actions';
import * as types from '../constants';

describe('actions', () => {
  it('should create an action to add expense', () => {
    const value = 200;
    const name = 'lunch';
    const expectedExpense = {
      type: types.ADD_EXPENSES,
      value,
      name,
    }
    expect(actions.addExpenses(value, name)).toEqual(expectedExpense);
  });
});
