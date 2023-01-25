import styles from './Header.module.css'

import rocketLogo from '../assets/rocketlogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="logo" />
      <span><span>to</span><span>do</span></span>
    </header>
  )
}