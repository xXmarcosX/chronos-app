import './styles/theme.css'
import './styles/global.css'

import Container from './components/Container/Container'
import Logo from './components/Logo/Logo'
import Menu from './components/Menu/Menu'
import Counter from './components/Counter/Counter'
import Input from './components/Input/Input'
import Cycles from './components/Cycles/Cycles'
import DefaultButton from './components/Button/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import Footer from './components/Footer/Footer'

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
        <form action="" className='form'>
          <div className="formRow">
            <Input 
            type='text' 
            id='input' 
            labelText='Task' 
            title='Task'
            placeholder='Digite sua Task'
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
          </div>
        </form>
      </Container>

      {/* Footer */}
      <Container>
        <Footer/>
      </Container>
    </>
  )
}
