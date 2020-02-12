import reducer from '../reducer';
import * as actions from '../actions';

describe('reducer', () => {
  it('should create an initial store with general sum', () => {
    const initSum = 500;
    const expectedStore = {
      generalSum: initSum,
      currentSum: initSum,
      isCurrentSumPositive: true,
      expenses: [],
    };
    expect(reducer(
      {},
      actions.addGeneralSum(initSum)
    )).toEqual(expectedStore);
  });
});
