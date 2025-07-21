import RouterLink from '../RouterLink/RouterLink';
import styles from './Logo.module.css'

import { TimerIcon } from "lucide-react";

export default function Logo() {

  return (
    <>
      <div className={styles.logo}>
        <RouterLink href="/">
          <TimerIcon size={68} className={styles.icon} />
          <p>Chronos</p>
        </RouterLink>
      </div>
    </>
  )
}
