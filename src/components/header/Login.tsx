import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import defaultPhoto from './defaultAvatar.png'

export default function LoginBlock(props : UserAuth) {
  const { UserAuth } = props
  const ref1 = useRef<HTMLButtonElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (UserAuth) {
      const handleHover = () => {
        const dropDown = document.querySelector('#statsDrop') as HTMLElement
        dropDown.style.display = 'flex'
      }
      const handleOut = () => {
        const dropDown = document.querySelector('#statsDrop') as HTMLElement
        dropDown.style.display = 'none'
      }
      const handleClick = () => {
        const dropDown = document.querySelector('#statsDrop') as HTMLElement
        dropDown.style.display = 'none'
      }
      const element1 = ref1.current!
      const element2 = ref2.current!
      element1.addEventListener('mouseover', handleHover)
      element1.addEventListener('mouseout', handleOut)
      element2.addEventListener('click', handleClick)
    }
  })
  if (UserAuth) {
    const user = JSON.parse(UserAuth) as IUser
    const { name } = user
    return (
      <div className={styles.login}>
        <img src={defaultPhoto} alt="user avatar" height="20" width="20" data-view-component="true" />
        <button className={styles.name} type="button" ref={ref1}>
          {name}
          <div id="statsDrop" className={`${styles.dropdownContent}`} ref={ref2}>
            <Link to="/stats">cтатистика</Link>
          </div>
        </button>
      </div>
    )
  }
  return (
    <div className={styles.login}>
      <Link to="/auth"><span>Войти</span></Link>
    </div>
  )
}

type UserAuth = { UserAuth: string | null }
interface IUser {
  name: string
  email: string
  password: string
}