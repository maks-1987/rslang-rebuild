/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useRef, useState } from 'react'
import Endpoints from '../../../endpoints/endpoints'
// import { IWord } from '../../../types/models'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
// import { audioGameSlice } from '../../redux/reducers/audioGameSlice'
import styles from './Audiogame.module.css'
// import AnswerList from './game-components/AnswerList'
import AudioIcon from './game-components/AudioIcon'
// import NextCardBtn from './game-components/NextCardBtn'

function Audiogame() {
  const dispatch = useAppDispatch()
  const { changeStyle, currentWord } = useAppSelector((state) => state.audioGameSlice)
  // const [wordIndex, setwordIndex] = useState(0)
  // const [progress, setProgress] = useState(1)
  // const data = useAppSelector((state) => state.sprintGameSlice.gameData)
  const voiceBtn = useRef<HTMLAudioElement>(null)

  let progress = useAppSelector((state) => state.audioGameSlice.counterProgress)
  if (progress > 19) progress = 20

  function handleVoice() {
    voiceBtn.current?.play()
  }

  return (
    <div className={['container', styles.wrapper].join(' ')}>
      <div className={styles.counter}>{`${progress} / 20`}</div>
      <div className={styles.gameContent}>
        <div className={styles.answerContent}>
          <div className={styles.imgWrapper}>
            <img
              className={changeStyle ? styles.answerImg : `${styles.answerImg} ${styles.hideImg}`}
              src={`${Endpoints.ROOT}/${currentWord?.image}`}
              alt="ansver-img"
            />
          </div>
          <div className={styles.answerWordContainer}>
            <button
              type="button"
              className={changeStyle ? styles.playBtn : `${styles.playBtn} ${styles.hidePlayBtn}`}
              onClick={handleVoice}
            >
              <AudioIcon />
            </button>
            <audio
              src={`${Endpoints.ROOT}/${currentWord?.audio}`}
              autoPlay
              ref={voiceBtn}
              onClick={handleVoice}
            >
              _
            </audio>
            <span
              className={
                changeStyle ? styles.answerWord : `${styles.answerWord} ${styles.hiddenAnswer}`
              }
            >
              {`${currentWord?.word}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audiogame
