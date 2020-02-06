import React from 'react';
import { connect } from 'react-redux';

import { addPurchase } from '../actions';

let Purchase = ({ expenseItem, dispatch }) => {
  let purchaseName = '';
  let purchaseValue = '';

  const addPurchaseToList = () => {
    dispatch(addPurchase());
  }

  return (
    <div>
      <h3>
        Введите ваши покупки на "{expenseItem.name}".
      </h3>
      <label htmlFor="purchase_name">Покупка:</label>
      <input ref={(input)=>{purchaseName=input}} type="text" id="purchase_name"/>
      <label htmlFor="purchase_value">Сколько потратили:</label>
      <input ref={(input)=>{purchaseValue=input}} type="text" id="purchase_value"/>
      <button onClick={addPurchaseToList}>Добавить покупку</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    expenseItem: state.expenses.find((item) => {
      return item.id===Number(ownProps.match.params.expenseId)
    })
  }
}

Purchase = connect(
  mapStateToProps
)(Purchase);

export default Purchase;
