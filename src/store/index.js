import {makeAutoObservable} from 'mobx'

class Timer {
  secondsPassed = 0
  dateObj = {
    date: 0
  }

  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
    this.dateObj.date += 1
  }
}

export const myTimer = new Timer()

// setInterval(() => {
//   myTimer.increaseTimer()
// }, 1000)
