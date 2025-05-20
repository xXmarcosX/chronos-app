import { History, Home, Settings, Sun, Moon } from 'lucide-react'
import styles from './Menu.module.css'
import MenuIcon from './MenuIcon/MenuIcon'
import { useState, useEffect } from 'react'

type AvailableThemes = 'light' | 'dark'

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {

    // força o valor do storage a ser sempre light ou dark e por padrão retorna dark
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'

    return storageTheme
  })

  const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const btns = [
    {
      icon: <Home />,
      title: 'Ir para home'
    },
    {
      icon: <History />,
      title: 'Ir para o histórico'
    },
    {
      icon: <Settings />,
      title: 'Ir para as configurações'
    },
    {
      icon: theme == 'dark' ? <Sun /> : <Moon />,
      title: 'Alterar tema',
      funcao: handleThemeChange
    }
  ]

  return (
    <>
      <nav className={styles.container}>
        {btns.map(bt =>
          <MenuIcon
            func={bt.funcao && bt.funcao}
            title={bt.title}>
            {bt.icon}
          </MenuIcon>)}
      </nav>
    </>
  )
}
