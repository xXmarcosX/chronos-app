import { History, Home, Settings, Sun } from 'lucide-react'
import styles from './Menu.module.css'
import MenuIcon from './MenuIcon/MenuIcon'

export default function Menu() {
  const btns = [
    {
      icon: <Home/>
    },
    {
      icon: <History/>
    },
    {
      icon: <Settings/>
    },
    {
        icon: <Sun/>
    }
  ]

  return (
    <>
      <nav className={styles.container}>
        {btns.map(bt => <MenuIcon>{bt.icon}</MenuIcon>)}
      </nav>
    </>
  )
}
