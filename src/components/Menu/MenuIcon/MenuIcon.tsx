import styles from './MenuIcon.module.css'

type MenuIconProps = {
  children: React.ReactNode,
  title: string,
  func?: (e: any) =>  void
}

export default function MenuIcon({children, func, title}: MenuIconProps) {
  return (
    <>
      <a href='' className={styles.link}>
        <button className={styles.button} onClick={func} title={title}>{children}</button>
      </a>
    </>
  )
}
