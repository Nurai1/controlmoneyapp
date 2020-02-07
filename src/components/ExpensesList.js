import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

let ExpensesList = ({ expensesList }) => {

  if (expensesList!==undefined && expensesList.length !== 0){
    return(
      <ul>
        {expensesList.map((expense, idx) => {
          return (
            <li key={idx}>
              <NavLink
                exact
                to={`/${expense.id}`}>
                На категорию "{expense.name}" осталось {expense.value} рублей
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }

  return ""
}

const mapStateToProps = (state) => {
  return {
    expensesList: state.expenses
  }
}

ExpensesList = connect(
  mapStateToProps
)(ExpensesList);

export default ExpensesList;
