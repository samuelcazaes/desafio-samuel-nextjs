type ButtonType = 
React.ButtonHTMLAttributes<HTMLButtonElement>;

import styles from './button.module.css'

const Button = ({children, ...props}: ButtonType) => {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}

export default Button