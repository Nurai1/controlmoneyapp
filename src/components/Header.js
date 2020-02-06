import React from 'react';
import { connect } from 'react-redux'

import { addGeneralSum } from '../actions';

let Header = ({ generalSum, dispatch }) => {
  let sumInput ='';

  const getGeneralSum = () => {
    dispatch(addGeneralSum(Number(sumInput.value)))
  }

  if (typeof generalSum === "number"){
    return (
      <div>
        <h2>Добро пожаловать в Control Money App.</h2>
        <p>У вас осталось {generalSum} рублей.</p>
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
    generalSum: state.generalSum
  }
}

Header = connect(
  mapStateToProps
)(Header)

export default Header
