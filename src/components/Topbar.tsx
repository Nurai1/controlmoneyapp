import React from 'react';
import { connect } from 'react-redux';

import { addGeneralSum } from '../store/actions';
import { isPositiveNumber } from '../utils/isPositiveNum';

import {
    addGeneralSumAction,
    AppState
} from '../store/types';

interface TopbarProps {
    generalSum: number;
    currentSum: number;
    addGeneralSum: (value: number) => addGeneralSumAction;
}

export const Topbar: React.FC<TopbarProps> = ({ generalSum, currentSum, addGeneralSum }) => {
  let sumInput: HTMLInputElement | null = null;

  const getGeneralSum = () => {
      console.log('nahagahs');
      addGeneralSum(Number((sumInput as HTMLInputElement).value));
  };

  if (isPositiveNumber(generalSum)) {
    return (
      <div className="topbar">
        <h2 className="topbar__title">Добро пожаловать в Control Money App.</h2>
        <div className="topbar__counters">
          <p className="topbar__counter">
            Ваша общая сумма в наличии
            <p>(в рублях):</p>
            <span className="num-count">{generalSum}</span>
          </p>
          <p className="topbar__counter">
            Ваша сумма в остатке после вычета категорий
            <p>(в рублях):</p>
            <span className="num-count">{currentSum}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="topbar">
      <h2 className="topbar__title">Добро пожаловать в Control Money App.</h2>
      <label>
        Введите сумму, которой вы распологаете.
        <br />
        <input ref={(input) => { sumInput = input; }} type="text" />
        <br />
      </label>
      <button type="button" onClick={getGeneralSum}>Начать учет</button>
      <h3 className="topbar__mistake-text">
        {(generalSum === undefined || isPositiveNumber(generalSum))
          ? '' : 'Пожалуйста, введите корректное число.'}
      </h3>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  generalSum: state.generalSum,
  currentSum: state.currentSum,
});

const mapDispatchToProps = {
        addGeneralSum
    };

const TopbarContainer = connect(
  mapStateToProps,
    mapDispatchToProps,
)(Topbar);

export default TopbarContainer;
