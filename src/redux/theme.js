import {createSlice} from '@reduxjs/toolkit'

const initValue = {
  color: '#ff00ff'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initValue
  },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload
    }
  }
})

export default themeSlice.reducer
