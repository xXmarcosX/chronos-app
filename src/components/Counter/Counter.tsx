import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import styles from './Counter.module.css'

export default function Counter() {

  const taskContext = useContext(TaskContext)

  return (
    <>
      <div className={styles.counterContainer}>
        <p>00:00</p>
      </div>
    </>
  )
}
