import ActiveLink from '../ActiveLink'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles['menu-container']}>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
    </nav>
  )
}
