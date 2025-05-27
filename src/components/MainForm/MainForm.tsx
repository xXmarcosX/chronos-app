import Input from "../Input/Input"
import DefaultButton from "../Button/DefaultButton"
import Cycles from "../Cycles/Cycles"

import { PlayCircleIcon } from "lucide-react"
import { useState } from "react"

export default function MainForm() {

  const [taskName, setTaskName] = useState('')

  const handleStartNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value)
  }

  return (
    <>
      <form action="" className='form' onSubmit={handleStartNewTask}>
        <h1>form foi enviado vezes</h1>
        <div className="formRow">
          <Input
            type='text'
            id='input'
            labelText='Task'
            title='Task'
            placeholder='Digite sua Task'
            value={taskName}
            onChange={handleChange}
          />
        </div>

        <div className="formRow">
          <p>O próximo intervaloe é de 25 minutos</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </>
  )
}
