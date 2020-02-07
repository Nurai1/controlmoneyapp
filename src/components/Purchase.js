import React from 'react';
import { connect } from 'react-redux';

import { addPurchase } from '../actions';

let Purchase = ({ expenseItem, dispatch }) => {
  let purchaseName = '';
  let purchaseValue = '';

  const addPurchaseToList = () => {
    dispatch(addPurchase(
      expenseItem.id,
      Number(purchaseValue.value),
      purchaseName.value
    ));
  }
  if (expenseItem === null)
    return(
      <div>
        Это оповещательное сообщение. Хранилище с данными о покупках не имеет
        информации, чтобы ее показать. Скорее всего, вы обновили страницу или
        перешли на поддомен, введя его в поисковой строке.
        Так как данное приложение не работает с базой данных, для проверки
        логики приложения пожалуйста пользуйтесь кнопками "вернуться на
        предыдущую страницу" в браузере.
      </div>
    )
  return (
    <div>
      <h3>
        Введите ваши покупки в категории "{expenseItem.name}".
      </h3>
      <label htmlFor="purchase_name">Покупка:</label>
      <input ref={(input)=>{purchaseName=input}} type="text" id="purchase_name"/>
      <label htmlFor="purchase_value">Сколько потратили:</label>
      <input ref={(input)=>{purchaseValue=input}} type="text" id="purchase_value"/>
      <button onClick={addPurchaseToList}>Добавить покупку</button>
        <p>На категорию "{expenseItem.name}" осталось {expenseItem.value} рублей.</p>
        <table>
          <td>
            <th>Название продукта</th>
            {expenseItem.purchases.map((purchase) => (
                <tr>{purchase.name}</tr>
            ))}
          </td>
          <td>
            <th>Цена</th>
            {expenseItem.purchases.map((purchase) => (
                <tr>{purchase.value}</tr>
            ))}
          </td>
        </table>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (state.expenses === undefined)
    return {
      expenseItem: null
    }
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
