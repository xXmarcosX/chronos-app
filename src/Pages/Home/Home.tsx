import '../../styles/global.css'
import '../../styles/theme.css'

import { MainTemplate } from '../../templates/MainTemplate/MainTemplate'
import Container from '../../components/Container/Container'
import Counter from '../../components/Counter/Counter'
import MainForm from '../../components/MainForm/MainForm'

export function Home() {

  return (
    <>
      <MainTemplate>
        {/* Contador */}
        <Container>
          <Counter/>
        </Container>

        {/* Form */}
        <Container>
          <MainForm/>
        </Container>
      </MainTemplate>
    </>
  )
}
