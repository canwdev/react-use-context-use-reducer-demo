import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Email: {user.email}</li>
        <li>Color: {theme.color}</li>
      </ul>
    </div>
  )
}

export default Profile
