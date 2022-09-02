/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { whereEnterGame, modalToggle, currentGroupPage } from '../../redux/reducers/sprintGameSlice'
import { useAppDispatch } from '../../redux/hooks/redux'

import styles from './dictionaryGameLink.module.css'
import { IFetchParam } from '../../../types/sprint-game-models'

function DictionaryGameLinkBlock() {
  const { group = 0, page = 0 } = useParams()
  const dispatch = useAppDispatch()
  const [open, setIsOpen] = useState(false)
  
  const handleClick = () => {
    const paramForFetch: IFetchParam = {
      textbookSection: String(group),
      page: Number(page),
    }
    setIsOpen(false)
    dispatch(whereEnterGame(true))
    dispatch(modalToggle(true))
    dispatch(currentGroupPage(paramForFetch))
  }
  return (
    <div
      className={styles.dictionaryGameDropDown}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <svg className={styles.game} data-name="Layer 1" id="Layer_1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <path d="M31,11.44A6.49,6.49,0,0,0,19.82,7H12.18A6.49,6.49,0,0,0,1,11.44,84.11,84.11,0,0,0,0,23.53c0,2.42,1,4,2.92,4.36A5.41,5.41,0,0,0,4,28a3.9,3.9,0,0,0,3.82-2.82c0.39-1.1,1.09-2.62,1.52-3.54A4,4,0,0,0,14.87,19h2.26a4,4,0,0,0,5.52,2.64c0.43,0.91,1.13,2.43,1.52,3.54A3.9,3.9,0,0,0,28,28a5.4,5.4,0,0,0,1.09-.11C31,27.5,32,25.95,32,23.53A84.11,84.11,0,0,0,31,11.44ZM6.89,24.85a3,3,0,0,1-3.77,2.06C1.37,26.54,1,24.87,1,23.53a78.9,78.9,0,0,1,.62-9.28A6.52,6.52,0,0,0,7,18v0a4,4,0,0,0,1.5,3.11C8,22.13,7.3,23.68,6.89,24.85ZM11,21a3,3,0,0,1-3-3,2.89,2.89,0,0,1,0-.43l0-.57H7.5a5.5,5.5,0,1,1,4.57-2.44L11.75,15l0.53,0.25A3,3,0,0,1,11,21Zm4-3a4,4,0,0,0-1.82-3.35A6.48,6.48,0,0,0,13,8H19a6.48,6.48,0,0,0-.22,6.65A4,4,0,0,0,17,18H15Zm3,0a3,3,0,0,1,1.73-2.71L20.25,15l-0.32-.48A5.5,5.5,0,1,1,24.52,17H23.88L24,17.57A2.89,2.89,0,0,1,24,18,3,3,0,0,1,18,18Zm10.88,8.91a3,3,0,0,1-3.77-2.06C24.7,23.68,24,22.13,23.5,21.11A4,4,0,0,0,25,18v0a6.51,6.51,0,0,0,5.38-3.73A79,79,0,0,1,31,23.53C31,24.87,30.63,26.54,28.88,26.91Z" />
        <path d="M9,13h2V10H9V8H6v2H4v3H6v2H9V13ZM8,14H7V12H5V11H7V9H8v2h2v1H8v2Z" />
        <path d="M24.5,10A1.5,1.5,0,1,0,23,8.5,1.5,1.5,0,0,0,24.5,10Zm0-2a0.5,0.5,0,1,1-.5.5A0.5,0.5,0,0,1,24.5,8Z" />
        <path d="M24.5,16A1.5,1.5,0,1,0,23,14.5,1.5,1.5,0,0,0,24.5,16Zm0-2a0.5,0.5,0,1,1-.5.5A0.5,0.5,0,0,1,24.5,14Z" />
        <path d="M21.5,13A1.5,1.5,0,1,0,20,11.5,1.5,1.5,0,0,0,21.5,13Zm0-2a0.5,0.5,0,1,1-.5.5A0.5,0.5,0,0,1,21.5,11Z" />
        <path d="M27.5,13A1.5,1.5,0,1,0,26,11.5,1.5,1.5,0,0,0,27.5,13Zm0-2a0.5,0.5,0,1,1-.5.5A0.5,0.5,0,0,1,27.5,11Z" />
        <path d="M11,16a2,2,0,1,0,2,2A2,2,0,0,0,11,16Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,11,19Z" />
        <path d="M21,16a2,2,0,1,0,2,2A2,2,0,0,0,21,16Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,21,19Z" />
      </svg>
      <div
        id="dropdown"
        className={`${styles.dropdownContent} ${open ? styles.open : styles.close}`}
        onClick={handleClick}
      >
        <Link className={`${styles.toGame} ${styles.toAudioChallenge}`} to="/audiochallenge">аудиовызов</Link>
        <Link className={` ${styles.toGame} ${styles.toSprintChallenge}`} to="/sprintchallenge">спринт</Link>
      </div>
    </div>
  )
}
export default DictionaryGameLinkBlock
