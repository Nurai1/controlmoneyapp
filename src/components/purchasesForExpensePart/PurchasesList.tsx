import React from 'react';

import { Expense } from '../../store/types';

type PurchasesListProps = {
    expenseItem: Expense
};

const PurchasesList: React.FC<PurchasesListProps> = ({ expenseItem }) => (
  <div className="purchasesList">
    <p className="purchasesList__info">
      На категорию &quot;
      {expenseItem.name}
      &quot; осталось
      {' '}
      {expenseItem.value}
      {' '}
      рублей.
    </p>
    <table className="purchasesList__table">
      <tr>
        <th>Название продукта</th>
        <th>Цена</th>
      </tr>
      {expenseItem.purchases.map((purchase) => (
        <tr>
          <td>{purchase.name}</td>
          <td>{purchase.value}</td>
        </tr>
      ))}
    </table>
  </div>
);

export default PurchasesList;
