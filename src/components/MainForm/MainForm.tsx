import Input from "../Input/Input"
import DefaultButton from "../Button/DefaultButton"
import Cycles from "../Cycles/Cycles"

import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { useState } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions"
import Tips from "../Tips/Tips"

export default function MainForm() {
  const { state, dispatch } = useTaskContext()

  const [taskName, setTaskName] = useState('')

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  const handleStartNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!taskName.trim()) {
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    }

    dispatch({
      type: TaskActionsTypes.START_TASK,
      payload: newTask
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value)
  }

  const handleInterruptTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    dispatch({
      type: TaskActionsTypes.INTERRUPT_TASK
    })
  }

  return (
    <>
      <form action="" className='form' onSubmit={handleStartNewTask}>
        <div className="formRow">
          <Input
            type='text'
            id='input'
            labelText='Task'
            title='Task'
            placeholder='Digite sua Task'
            value={taskName}
            onChange={handleChange}
            disabled={state.activeTask ? true : false}
          />
        </div>

        <div className="formRow">
          <Tips />
        </div>

        {!state.activeTask ? 'Você ainda não iniciou uma tarefa' : (
          <div className="formRow">
            <Cycles />
          </div>
        )}

        <div className="formRow">
          {!state.activeTask ? (
            <DefaultButton
              icon={<PlayCircleIcon />}
              color='green'
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              key={0}
            />
          ) : (
            <DefaultButton
              icon={<StopCircleIcon />}
              color='red'
              aria-label="Interromper tarefa atual"
              title="Interromper tarefa atual"
              type="button"
              onClick={handleInterruptTask}
              key={1}
            />
          )}
        </div>
      </form>
    </>
  )
}
