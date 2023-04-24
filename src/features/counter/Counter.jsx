import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increaseByValue, increment, reset } from './counterSlice';


const Counter = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count)

  const addNum = Number(number) || 0

  const resetAll = () => {
      dispatch(reset());
      setNumber(0);
  }
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>
        <button onClick={ resetAll }>Reset</button>
        <button onClick={() => dispatch(increaseByValue(addNum))} >Increate By value</button>
      </div>

    </div>
  )
}

export default Counter