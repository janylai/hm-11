import styles from './ErrorModal.module.css'
import Button from './Button'
import Card from './Card'


const NewModal = (props) => {

    function Yes(){
        props.lifting(props.id);
    }

    function NO(){
        props.no();
    }
    
    return(
        <div className= {styles.backdrop} onClick = {props.onConfirm}>
           <Card className = {styles.modal}>
            <header className= {styles.header} >
               <h2> Удаление пользователя! </h2>
            </header>
            <div className= {styles.content} >
                <p> Вы действительно хотите удалить? </p>
            </div>
            <footer className= {styles.actions} >
                <Button id={props.id} onClick={Yes}> Да</Button>
                <Button  onClick={NO}>Нет</Button>
            </footer>
           </Card>
        </div>
    )
}

export default NewModal;