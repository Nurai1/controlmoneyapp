import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import AddPurchases from './AddPurchases';
import PurchasesList from './PurchasesList';

import {
  AppState,
  Expense
} from '../../store/types';

type PurchasesProps = {
  expenseItem: Expense | null,
};

const Purchases: React.FC<PurchasesProps> = ({ expenseItem }) => {

  if (expenseItem === null) {
    return (
      <div className="purchases wrapper">
        Это оповещательное сообщение. Хранилище с данными о покупках не имеет
        информации, чтобы ее показать. Скорее всего, вы обновили страницу или
        перешли на поддомен, введя его в поисковой строке.
        Так как данное приложение не работает с базой данных, для проверки
        логики приложения пожалуйста пользуйтесь кнопками &quot;вернуться на
        предыдущую страницу&quot; в браузере.
      </div>
    );
  }

  return (
    <div className="purchases wrapper">
      <AddPurchases expenseItem={expenseItem} />
      <PurchasesList expenseItem={expenseItem} />
    </div>
  );
};

type purchaseOwnProps = {
    expenseId: string
};

const mapStateToProps = (state: AppState, ownProps: RouteComponentProps<purchaseOwnProps>) => ({
    expenseItem: state.expenses.find((item: Expense) => item.id === Number(ownProps.match.params.expenseId)) || null,
  });

const PurchasesContainer = connect(
  mapStateToProps,
)(Purchases);

export default PurchasesContainer;
