import styles from './Footer.module.css'
import RouterLink from '../RouterLink/RouterLink'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <RouterLink href={'/aboout-pomodoro'}>Entenda como funciona a técnica pomodoro</RouterLink>
        <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
      </footer>
    </>
  )
}
