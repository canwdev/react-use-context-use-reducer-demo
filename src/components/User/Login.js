import React from 'react'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../redux/user'

const actions = userSlice.actions

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(actions.login({
            name: 'Pedro',
            age: 20,
            email: 'pedro@example.com'
          }))
        }}
      >Login</button>

      <button
        onClick={() => {
          dispatch(actions.logout())
        }}
      >Logout</button>
    </div>
  )
}

export default Login
