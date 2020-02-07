import React from 'react';
import { connect } from 'react-redux';

import { addGeneralSum } from '../actions';
import { isPositiveNumber } from '../utilities';

const Topbar = ({ generalSum, currentSum, dispatch }) => {
  let sumInput = '';

  const getGeneralSum = () => {
    dispatch(addGeneralSum(Number(sumInput.value)));
  };

  if (isPositiveNumber(generalSum)) {
    return (
      <div>
        <h2>Добро пожаловать в Control Money App.</h2>
        <p>
          Ваша общая сумма в наличии:
          {' '}
          {generalSum}
          {' '}
          рублей.
        </p>
        <p>
          Ваша сумма в остатке после вычета категорий:
          {' '}
          {currentSum}
          {' '}
          рублей.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Добро пожаловать в Control Money App.</h2>
      <h3 style={{ color: 'red' }}>
        {(generalSum === undefined || isPositiveNumber(generalSum))
          ? '' : 'Пожалуйста, введите корректное число.'}
      </h3>
      <label htmlFor="generalSum">
        Введите сумму, которой вы распологаете.
        <input ref={(input) => { sumInput = input; }} id="generalSum" type="text" />
      </label>
      <button type="button" onClick={getGeneralSum}>Начать учет</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  generalSum: state.generalSum,
  currentSum: state.currentSum,
});

const TopbarContainer = connect(
  mapStateToProps,
)(Topbar);

export default TopbarContainer;
