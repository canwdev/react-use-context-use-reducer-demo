import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { themeSlice } from '../redux/theme'

const actions = themeSlice.actions

const MyComponent = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.value)

  return (
    <div>
      <input type="color" value={theme.color} onInput={
        (e) => {
          dispatch(actions.changeColor({
            color: e.target.value
          }))
        }

      }/>
      {theme.color}
    </div>
  );
};

export default MyComponent;
