import React from 'react';
import "./App.css"
import { useSelector, useDispatch } from 'react-redux';
import { plusNumber, minusNumber } from './action/index';
const App = () => {
  const mystate = useSelector((state) => state.convertNumber)
  const dispatch = useDispatch();
  const inputChangedHandler = (event) => {
  const updatedKeyword = event.target.myState}


  return (
    <div className='container'>
      <h1>Reduxx</h1>
      <div className='quantity'>
        <button className='quantity_minus' title='DECREMENT' onClick={() => dispatch(minusNumber())}>-</button>
        <input className='input' name="quantity" type="text"  value={mystate} onChange={inputChangedHandler} />
        <button className="quantity_plus" title='INCREMENT'
          onClick={() => dispatch(plusNumber(5))}>+</button>
      </div>
    </div>
  )
}

export default App