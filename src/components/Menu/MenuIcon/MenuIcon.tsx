import styles from './MenuIcon.module.css'
import RouterLink from '../../RouterLink/RouterLink'

type MenuIconProps = {
  children: React.ReactNode,
  title: string,
  func?: (e: any) =>  void,
  link?: string
}

export default function MenuIcon({children, func, title, link}: MenuIconProps) {
  return (
    <>
      <RouterLink href={link ? link : 'error'} className={styles.link}>
        <button className={styles.button} onClick={func} title={title}>{children}</button>
      </RouterLink>
    </>
  )
}
