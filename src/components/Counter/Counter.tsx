import styles from './Counter.module.css'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

export default function Counter() {

  const {state} = useTaskContext()

  return (
    <>
      <div className={styles.counterContainer}>
        <p>{state.formattedSecondsRemaining}</p>
      </div>
    </>
  )
}
