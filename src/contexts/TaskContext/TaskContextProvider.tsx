import { useEffect, useReducer } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"
import { TaskActionsTypes } from "./taskActions"

type TaskContextProviderProps = {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)

  const worker = TimerWorkerManager.getInstance()

  worker.onmessage(e => {
    const countDownSeconds = e.data
    console.log(countDownSeconds)

    if (countDownSeconds <= 0) {
      dispatch({
        type: TaskActionsTypes.COMPLETE_TASK
      })
      worker.terminate()
    } else {
      dispatch({
        type: TaskActionsTypes.COUNTDOWN,
        payload: { secondsRemaining: countDownSeconds }
      })
    }
  })

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker terminado por falta de active task')
      worker.terminate()
    }

    worker.postMessage(state)
  }, [worker, state])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}