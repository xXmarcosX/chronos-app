import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import styles from './Cycles.module.css'

export default function Cycles() {
  const { state } = useTaskContext()

  const cycleStep = Array(state.currentCycle).fill(state.currentCycle)

  const cycleDesc = {
    worktime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo'
  }

  return (
    <>
      <div className={styles.cycles}>
        <span>Ciclos: </span>

        <div className={styles.cycleDots}>
          {cycleStep.map((_, i) => {
            const nextCycle = getNextCycle(i)
            const nextCycleType = getNextCycleType(nextCycle)

            return <span
              key={i}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDesc[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDesc[nextCycleType]}`}
            ></span>
          })}
        </div>
      </div>
    </>
  )
}
