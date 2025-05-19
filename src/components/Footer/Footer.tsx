import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="">Entenda como funciona a técnica pomodoro</a>
        <a href="">Chronos Pomodor &copy; {new Date().getFullYear()}</a>
      </footer>
    </>
  )
}
