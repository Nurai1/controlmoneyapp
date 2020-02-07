import React from 'react';

const PurchasesList = ({ expenseItem }) => (
  <div>
    <p>
      На категорию &quot;
      {expenseItem.name}
      &quot; осталось
      {' '}
      {expenseItem.value}
      {' '}
      рублей.
    </p>
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
);

export default PurchasesList;
