import React from 'react';
import { connect } from 'react-redux';

import { addExpenses } from '../store/actions';
import { isPositiveNumber } from '../utils/isPositiveNum';

import {
    AppState,
    addExpenseAction,
    ExpensePayload
} from '../store/types';

interface AddExpensesProps {
    generalSum: number,
        isCurrentSumPositive: boolean,
        addExpenses: (payload: ExpensePayload) => addExpenseAction,
}

const AddExpenses: React.FC<AddExpensesProps> = ({
  generalSum,
  isCurrentSumPositive,
                                                     addExpenses,
}) => {
  let expenseName: HTMLInputElement | null = null;
  let expenseValue: HTMLInputElement | null = null;

  const addExpenseToList = () => {
    if ((expenseName as HTMLInputElement).value.trim() === '' || (expenseValue as HTMLInputElement).value.trim() === ''
        || !isPositiveNumber((expenseValue as HTMLInputElement).value)) { return; }

    addExpenses({ value: Number((expenseValue as HTMLInputElement).value), name: (expenseName as HTMLInputElement).value });

      (expenseName as HTMLInputElement).value = '';
      (expenseValue as HTMLInputElement).value = '';
  };

  if (isPositiveNumber(generalSum)) {
    return (
      <div className="addExpense">
        <p className="addExpense__info">
          Введите вид товара, на который вы собираетесь тратить деньги и сколько
          вы планируете на него потратить.
        </p>
        <label>
          Вид товара:
          <br />
          <input ref={(input) => { expenseName = input; }} type="text" />
          <br />
        </label>
        <label>
          Планируемые расходы:
          <br />
          <input ref={(input) => { expenseValue = input; }} type="text" />
          <br />
        </label>
        <button type="button" onClick={addExpenseToList}>Добавить расходы</button>
        <p>
          {isCurrentSumPositive ? ''
            : 'Не хватает средств, чтобы добавить категорию'}
        </p>
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state: AppState) => ({
  generalSum: state.generalSum,
  isCurrentSumPositive: state.isCurrentSumPositive,
});

const mapDispatchToProps = {
    addExpenses
};

const AddExpensesContainer = connect(
  mapStateToProps,
    mapDispatchToProps
)(AddExpenses);

export default AddExpensesContainer;
