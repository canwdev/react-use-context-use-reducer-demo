import React, {useEffect} from "react"
import { observer } from "mobx-react-lite"


//被`observer`包裹的函数式组件会被监听在它每一次调用前发生的任何变化
const TimerView = observer(({ timer }) => <h1>Seconds passed: {timer.secondsPassed}</h1>)

export default TimerView
