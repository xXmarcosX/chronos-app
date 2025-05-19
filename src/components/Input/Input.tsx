import styles from './Input.module.css'

type InputProps = {
  id: string,
  labelText: string 
} & React.ComponentProps<'input'>

export default function Input({type, id, labelText, ...rest}: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} type={type} id={id} {...rest}/>
    </>
  )
}
