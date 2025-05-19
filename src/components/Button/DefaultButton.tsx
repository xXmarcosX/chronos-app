import styles from './DefaultButton.module.css'

type ButtonProps = {
  icon: React.ReactNode,
  color?: 'green' | 'red'
} & React.ComponentProps<'button'>

export default function DefaultButton({icon, color = 'green', ...props}: ButtonProps) {
  return (
    <>
      <button className={`${styles.btn} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  )
}
