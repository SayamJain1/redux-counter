import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './counterSlice'

function CounterView() {
    const counter = useSelector((state) => {
        return state.counter.count
    })
    const dispatch = useDispatch();
    console.log(counter)
  return (
      <div>
          <h2>Count - {counter}</h2>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default CounterView