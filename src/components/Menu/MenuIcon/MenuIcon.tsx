import styles from './MenuIcon.module.css'

type MenuIconProps = {
  children: React.ReactNode
}

export default function MenuIcon({children}: MenuIconProps) {
  return (
    <>
      <a href='' className={styles.link}>
        <button className={styles.button}>{children}</button>
      </a>
    </>
  )
}
