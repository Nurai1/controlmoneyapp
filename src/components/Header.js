import React from 'react';
import { connect } from 'react-redux'

import { addGeneralSum } from '../actions';

let Header = ({ generalSum, currentSum, dispatch }) => {
  let sumInput ='';

  const getGeneralSum = () => {
    dispatch(addGeneralSum(Number(sumInput.value)))
  }

  if (isNaN(generalSum) && generalSum!==undefined){
    return (
        <div>
          <h2>Добро пожаловать в Control Money App.</h2>
          <h3 style={{color: "red"}}>Пожалуйста, введите корректное число.</h3>
          <label htmlFor="generalSum">Введите сумму, которой вы распологаете.</label>
          <input ref={(input)=>{sumInput=input}} id="generalSum" type="text"/>
          <button onClick={getGeneralSum}>Начать учет</button>
        </div>
    )
  }

  if (typeof generalSum === "number"){
    return (
      <div>
        <h2>Добро пожаловать в Control Money App.</h2>
        <p>Ваша общая сумма в наличии: {generalSum} рублей.</p>
        <p>Ваша сумма в остатке после вычета категорий: {currentSum} рублей.</p>
      </div>
    )
  }
  return(
    <div>
      <h2>Добро пожаловать в Control Money App.</h2>
      <label htmlFor="generalSum">Введите сумму, которой вы распологаете.</label>
      <input ref={(input)=>{sumInput=input}} id="generalSum" type="text"/>
      <button onClick={getGeneralSum}>Начать учет</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    generalSum: state.generalSum,
    currentSum: state.currentSum
  }
}

Header = connect(
  mapStateToProps
)(Header)

export default Header
