/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
import { timerWork } from '../../redux/reducers/sprintGameSlice'
// import { AppDispatchState } from '../../redux/store'
import styles from './sprint-game.module.css'

function Timer() {
  const dispatch = useAppDispatch()
  const time = useAppSelector((state) => state.sprintGameSlice.timer)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define, react-hooks/exhaustive-deps
    setTimeout(() => {
      setTimeout(() => {
        !time && clearTimeout()
        time && dispatch(timerWork(time - 1))
      }, 1000)
    }, 1000)
  }, [dispatch, time])

  return (
    <div className={styles.sprintGameTimer}>
      <span className={styles.sprintGameTimerContent}>
        У Вас осталось:
        <span className={styles.sprintGameTimerTikTak}>
          { time }
        </span>
        сeкунд!
      </span>
    </div>
  )
}
export default Timer
