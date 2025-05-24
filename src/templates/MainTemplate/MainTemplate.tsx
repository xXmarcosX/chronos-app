import '../../styles/global.css'
import '../../styles/theme.css'

import Container from '../../components/Container/Container'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {

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

      {children}

      {/* Footer */}
      <Container>
        <Footer/>
      </Container>
    </>
  )
}
