import React, { useState } from "react"
import {
  increment,
  decrement,
  incrementBy,
  selectCounter,
  incrementAsync,
} from "./counterSlice"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const [incrementValue, setIncrementValue] = useState(0)
  const value = useSelector(selectCounter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
        />
      </div>
      <button
        onClick={() => dispatch(incrementBy(Number(incrementValue) || 0))}
      >
        Increment By Amount
      </button>
      <button
        onClick={() => dispatch(incrementAsync(Number(incrementValue) || 0))}
      >
        Increment Async 1 sec
      </button>
    </div>
  )
}

export default App
