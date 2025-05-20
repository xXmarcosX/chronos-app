import { History, Home, Settings, Sun } from 'lucide-react'
import styles from './Menu.module.css'
import MenuIcon from './MenuIcon/MenuIcon'
import { useState, useEffect } from 'react'

type AvailableThemes = 'light' | 'dark'

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark')

  const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault()
    
    theme === 'dark' ? setTheme('light') : setTheme('dark')

    document.documentElement.setAttribute('data-theme', theme)
  }

  const btns = [
    {
      icon: <Home />,
      label: 'Ir para home',
    },
    {
      icon: <History />,
      label: 'Ir para histórico'
    },
    {
      icon: <Settings />,
      label: 'Ir para configurações'
    },
    {
      icon: <Sun />,
      label: 'Alterar tema',
      funcao: handleThemeChange
    }
  ]

  return (
    <>
      <nav className={styles.container}>
        {btns.map(bt =>
          <MenuIcon
            key={bt.label}
            label={bt.label}
            func={bt.funcao && bt.funcao}>
            {bt.icon}
          </MenuIcon>)}
      </nav>
    </>
  )
}
