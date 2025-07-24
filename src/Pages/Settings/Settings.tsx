import { SaveIcon } from "lucide-react";
import DefaultButton from "../../components/Button/DefaultButton";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export default function Settings() {
  const { state, dispatch } = useTaskContext()

  const workTimeInput = useRef<HTMLInputElement>(null)
  const shortBreakTimeInput = useRef<HTMLInputElement>(null)
  const longBreakTimeInput = useRef<HTMLInputElement>(null)

  const handleSaveConfig = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formErrors = []

    const worktime = Number(workTimeInput.current?.value)
    const shortBreakTime = Number(shortBreakTimeInput.current?.value)
    const longBreakTime = Number(longBreakTimeInput.current?.value)

    if (isNaN(worktime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para todos os campos')
    }

    if (worktime < 1 || worktime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco')
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto')
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso curto')
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error)
        return
      })
    }

    dispatch({type: TaskActionsTypes.CHANGE_SETTINGS, payload: {
      worktime,
      shortBreakTime,
      longBreakTime
    }})
    
    showMessage.success('Configurações salvas')
  }

  return (
    <>
      <MainTemplate>

        <Container>
          <Heading>
            Configurações
          </Heading>
        </Container>

        <Container>
          <p style={{ textAlign: 'center' }}>Modifique as configurações para tempo de foco, descanso curto e descanso longo</p>
        </Container>

        <Container>
          <form action="" className="form" onSubmit={handleSaveConfig}>
            <div className="formRow">
              <Input
                id="worktime"
                labelText="Foco"
                ref={workTimeInput}
                defaultValue={state.config.worktime}
                type="number"
              />
            </div>
            <div className="formRow">
              <Input
                id="shortBreakTime"
                labelText="Descanso Curto"
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
                type="number"
              />
            </div>
            <div className="formRow">
              <Input
                id="longBreakTime"
                labelText="Descanso Longo"
                ref={longBreakTimeInput}
                defaultValue={state.config.longBreakTime}
                type="number"
              />
            </div>
            <div className="formRow">
              <DefaultButton icon={<SaveIcon />} aria-label="Salvar Configurações" title="Salvar Configurações" />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  )
}
