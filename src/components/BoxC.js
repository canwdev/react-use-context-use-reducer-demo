import React, {useReducer} from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function BoxC() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div style={{
      background: "yellow",
      color: "blue",
      padding: "10px"
    }}>
      <h2>BoxC</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => dispatch({type: 'increment'})}>increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>descrement</button>
      </div>
    </div>
  )
}

export default BoxC
