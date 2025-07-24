import { ArrowBigDown, Trash2Icon } from "lucide-react";
import DefaultButton from "../../components/Button/DefaultButton";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading/Heading";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";

import styles from './history.module.css'
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import formatDate from "../../utils/formatDate";
import getTaskStatus from "../../utils/getTaskStatus";
import { useState } from "react";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export default function History() {
  const { state, dispatch } = useTaskContext()
  const [sortTaskOption, setSortTaskOption] = useState<SortTasksOptions>(() => {
    return {
      tasks: sortTasks({ tasks: state.tasks }),
      field: 'startDate',
      direction: 'desc'
    }
  })

  const handleSortTasks = ({ field }: Pick<SortTasksOptions, 'field'>) => {
    const newDirection = sortTaskOption.direction === 'desc' ? 'asc' : 'desc'

    setSortTaskOption({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOption.tasks,
        field: field
      }),
      direction: newDirection,
      field: field
    })
  }

  const handleResetHistory = () => {
    if(!confirm('Tem certeza que deseja apagar o histórico?')) return

    dispatch({type: TaskActionsTypes.RESET_STATE})
  }

  return (
    <>
      <MainTemplate>

        <Container>
          <Heading>
            <span>Histórico</span>
            <span className={styles.buttonContainer}>
              <DefaultButton icon={<Trash2Icon />}
                color="red"
                aria-label="Apagar histórico"
                title="Apagar histórico"
                onClick={handleResetHistory}
              />
            </span>
          </Heading>
        </Container>

        <Container>
          <div className={styles.responsiveTable}>
            <table>

              <thead>
                <tr>
                  <th onClick={() => handleSortTasks({ field: 'name' })} className={styles.thSort}>
                    Tarefa <ArrowBigDown/>
                  </th>
                  <th onClick={() => handleSortTasks({ field: 'duration' })} className={styles.thSort}>
                    Duração <ArrowBigDown/>
                  </th>
                  <th onClick={() => handleSortTasks({ field: 'startDate' })} className={styles.thSort}>
                    Data <ArrowBigDown/>
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {state.tasks.length > 0 ?
                  sortTaskOption.tasks.map(task => {
                    const taskTypeDictionary = {
                      worktime: 'Foco',
                      shortBreakTime: 'Descanso Curto',
                      longBreakTime: 'Descanso Longo'
                    }
                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.duration}min</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskTypeDictionary[task.type]}</td>
                      </tr>
                    )
                  })
                  :
                  <tr>
                    <td>No tactive tasks</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </Container>

      </MainTemplate>
    </>
  )
}
