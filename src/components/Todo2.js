import React, {useEffect} from "react"
import { observer } from "mobx-react-lite"
import {myTimer} from '../store'

//被`observer`包裹的函数式组件会被监听在它每一次调用前发生的任何变化
const TimerView = observer(({ timer }) => {
  return (
    <>
      <button onClick={() => {
        myTimer.increaseTimer()
      }}>+</button>
      <div>DateObj: {JSON.stringify(timer.dateObj)}</div>
    </>
  )
})

export default TimerView
