import './styles/theme.css'
import './styles/global.css'

import Container from './components/Container/Container'
import Logo from './components/Logo/Logo'
import Menu from './components/Menu/Menu'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer'
import MainForm from './components/MainForm/MainForm'

export function App() {

  return (
    <>
      {/* Logo */}
      <Container>
        <Logo />
      </Container>

      {/* Menu */}
      <Container>
        <Menu />
      </Container>

      {/* Contador */}
      <Container>
        <Counter />
      </Container>

      {/* Form */}
      <Container>
        <MainForm/>
      </Container>

      {/* Footer */}
      <Container>
        <Footer/>
      </Container>
    </>
  )
}
