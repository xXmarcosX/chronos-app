import styles from './MenuIcon.module.css'

type MenuIconProps = {
  children: React.ReactNode,
  label: string,
  func?: (e: any) => void
}

export default function MenuIcon({children, label, func}: MenuIconProps) {
  return (
    <>
      <a href='' className={styles.link} aria-label={label} title={label}>
        <button className={styles.button} onClick={func}>{children}</button>
      </a>
    </>
  )
}
