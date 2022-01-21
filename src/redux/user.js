import {createSlice} from '@reduxjs/toolkit'

const initValue = {
  name: '',
  age: 0,
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initValue
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initValue
    }
  }
})

export default userSlice.reducer
