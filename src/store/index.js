import React from 'react'
export const initialState = {
  user: {
    name: '',
    age: 0,
    email: ''
  },
  theme: {
    color: '#ff00ff'
  }
}

const user = (state, action) => {
  // console.log('user', state, action)
  switch (action.type) {
    case 'login':
      return {...state, ...action.value}
    case 'logout':
      return initialState.user
    default:
      return state
  }
}

const theme = (state, action) => {
  switch (action.type) {
    case 'changeColor':
      return {...state, color: action.value}
    default:
      return state
  }
}

const combineReducers = (reducers) => {
  return (state, action) => {
    // console.log('combineReducers', state, action)
    return Object.keys(reducers)
      .map(k => {
        // console.log('k', k)
        return {
          [k]: reducers[k](state[k], action)
        }
      })
      .reduce((pre, cur) => {
        console.log({pre, cur})
        return Object.assign({}, pre, cur)
      })
  }
}
export const reducers = combineReducers({user, theme})

const MyContext = React.createContext(null)

export default MyContext
