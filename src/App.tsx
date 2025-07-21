import './styles/theme.css'
import './styles/global.css'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import MessagesContainer from './components/MessagesContainer/MessagesContainer'
import MainRouter from './routers/MainRouter/MainRouter'

export function App() {

  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  )
}
