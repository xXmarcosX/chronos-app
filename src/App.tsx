import './styles/theme.css'
import './styles/global.css'

import { Home } from './Pages/Home/Home'
import { useState } from 'react'

import type { TaskStateModel } from './models/TaskStateModel'
import { TaskContext } from './contexts/TaskContext'

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    worktime: 25,
    shortBreakTime: 5,
    longBreakTime: 15
  }
}

export function App() {
  const [state, setState] = useState<TaskStateModel>(initialState)

  return (
    <TaskContext.Provider value={{chave: 'aatrox'}}>
       <Home/>
    </TaskContext.Provider>
  )
}
