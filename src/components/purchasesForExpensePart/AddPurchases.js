import React from 'react';
import { connect } from 'react-redux';

import { addPurchase } from '../../actions';
import { isPositiveNumber } from '../../utilities';

const AddPurchases = ({ expenseItem, dispatch }) => {
  let purchaseName = '';
  let purchaseValue = '';

  const addPurchaseToList = () => {
    if (purchaseName.value.trim() === '' || purchaseValue.value.trim() === ''
         || !isPositiveNumber(purchaseValue.value)) { return; }

    dispatch(addPurchase(
      expenseItem.id,
      Number(purchaseValue.value),
      purchaseName.value,
    ));

    purchaseName.value = '';
    purchaseValue.value = '';
  };

  return (
    <div>
      <h3>
        Введите ваши покупки в категории &quot;
        {expenseItem.name}
        &quot;.
      </h3>
      <label htmlFor="purchase_name">
        Покупка:
        <input ref={(input) => { purchaseName = input; }} type="text" id="purchase_name" />
      </label>
      <label htmlFor="purchase_value">
        Сколько потратили:
        <input ref={(input) => { purchaseValue = input; }} type="text" id="purchase_value" />
      </label>
      <button type="button" onClick={addPurchaseToList}>Добавить покупку</button>
      <p style={{ color: 'red' }}>
        { expenseItem.isExpensePositive ? ''
          : 'Не хватает средств, чтобы добавить покупку'}
      </p>
    </div>
  );
};

const AddPurchasesContainer = connect()(AddPurchases);

export default AddPurchasesContainer;
