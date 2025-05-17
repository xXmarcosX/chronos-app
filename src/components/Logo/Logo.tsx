import styles from './Logo.module.css'

import { TimerIcon } from "lucide-react";

export default function Logo() {

  return (
    <>
      <div className={styles.logo}>
        <a href="">
          <TimerIcon size={68} className={styles.icon} />
          <p>Chronos</p>
        </a>
      </div>
    </>
  )
}
