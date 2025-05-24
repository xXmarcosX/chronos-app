import Input from "../Input/Input"
import DefaultButton from "../Button/DefaultButton"
import Cycles from "../Cycles/Cycles"

import { PlayCircleIcon } from "lucide-react"

export default function MainForm() {

  return (
    <>
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
            <p>O próximo intervaloe é de 25 minutos</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
          </div>
        </form>
    </>
  )
}
