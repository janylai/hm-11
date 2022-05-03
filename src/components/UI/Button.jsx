import styles from './Button.module.css'
const Button = props => {
    return <button type={props.type || 'button'} onClick= {props.onClick} id={props.id} className= {styles.button}>
        {props.children}
    </button>
}
export default Button