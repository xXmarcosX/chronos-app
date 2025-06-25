import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

export default function Tips() {
  const { state } = useTaskContext()

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  const tipsForWhenActiveTask = {
    worktime: <span>Foque por {state.config.worktime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanse por {state.config.longBreakTime}min</span>
  }

  const tipsForNoActiveTask = {
    worktime: <span>Próximo ciclo é de {state.config.worktime}min</span>,
    shortBreakTime: <span>Próximo ciclo é de {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Próximo ciclo é de{state.config.longBreakTime}min</span>
  }

  return (
    <>
    {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
    {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  )
}

