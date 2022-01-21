import React, {useContext} from 'react'
import MyContext from '../store'

function BoxB() {
  const {state, dispatch} = useContext(MyContext)
  const {theme} = state

  return (
    <div style={{
      background: "greenyellow",
      color: "purple",
      padding: "10px"
    }}>
      <h2>BoxB</h2>

      <button
        onClick={() => {
          dispatch({
            type: 'login',
            value: {
              name: 'Pedro',
              age: 20,
              email: 'pedro@example.com'
            }
          })
        }}
      >Login</button>
      <button
        onClick={() => {
          dispatch({
            type: 'logout'
          })
        }}
      >Logout</button>

      <div>
        <input type="color" value={theme.color} onInput={
          (e) => {
            dispatch({
              type: 'changeColor',
              value: e.target.value
            })
          }

        }/>
        {theme.color}
      </div>
    </div>
  )
}

export default BoxB
