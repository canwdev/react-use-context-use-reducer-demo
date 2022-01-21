import React from 'react'
import MyContext from '../store'
import BoxB from "./BoxB";

function BoxA() {
  return (
      <MyContext.Consumer>
        {
          ({state: {user, theme}}) => (
            <div style={{
              background: "rebeccapurple",
              color: "white",
              padding: "10px"
            }}>
              <h2>BoxA</h2>

              <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Email: {user.email}</li>
                <li>Color: {theme.color}</li>
              </ul>

              <BoxB/>
            </div>
          )
        }
      </MyContext.Consumer>

  )
}

export default BoxA
