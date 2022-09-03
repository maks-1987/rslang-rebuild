import React from 'react'
import { useAppSelector } from '../../redux/hooks/redux'
import styles from './sprint-game.module.css'
import ButtonBlock from './SprintButtonBlock'

function PlayingField() {
  // const url = 'http://localhost:8088'
  const currentWord = useAppSelector((state) => state.sprintGameSlice.currentWord)
  const translateWordForComparison = useAppSelector((state) => state.sprintGameSlice.comparisonWord)

  return (
    <>
      <h1 className={styles.sprintGameTitle}>Спринт</h1>
      <section className={styles.sprintGameFieldWherePlaying}>
        <div className={styles.engWordField}>
          {currentWord?.word}
        </div>
        <div className={styles.line} />
        <div className={styles.translateEngWordField}>
          <span className="translate-word">
            {translateWordForComparison?.wordTranslate}
          </span>
        </div>
        {/* </section> */}
      </section>
      <ButtonBlock />
    </>

  )
}
export default PlayingField
