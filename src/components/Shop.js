import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'; 

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
        <h2>Buy this product for 50/-  </h2>
        <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>-</button>
        Add this item to cart
        <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop