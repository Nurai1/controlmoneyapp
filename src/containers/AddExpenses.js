import React from 'react';
import { connect } from 'react-redux';

import { addExpenses } from '../actions';

let AddExpenses = ({ generalSum, dispatch }) => {
  let expenseName='';
  let expenseValue='';

  const addExpenseToList = () => {
    dispatch(addExpenses(Number(expenseValue.value), expenseName.value));
  }
  if (typeof generalSum === "number"){
    return (
      <div>
        <h3>
          Введите вид товара, на который вы собираетесь тратить деньги и сколько
          вы планируете на него потратить.
        </h3>
        <label htmlFor="expense_name">Вид товара:</label>
        <input ref={(input)=>{expenseName=input}} type="text" id="expense_name"/>
        <label htmlFor="expense_value">Планируемые расходы:</label>
        <input ref={(input)=>{expenseValue=input}} type="text" id="expense_value"/>
        <button onClick={addExpenseToList}>Добавить расходы</button>
      </div>
    )
  }

  return ""
}

const mapStateToProps = (state) => {
  return {
    generalSum: state.generalSum
  }
}

AddExpenses = connect(
  mapStateToProps
)(AddExpenses)

export default AddExpenses
