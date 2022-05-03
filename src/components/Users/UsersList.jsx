import styles from './UsersList.module.css'
import Card from "../UI/Card"
import Button from '../UI/Button'
import { useState } from 'react'
import NewModal from '../UI/NewModal';

const UsersList = (props) => {
const [messageModals, setMessageModals] = useState(false);
const [id, setId] = useState('');

function deleteHandler(e){
    let id = e.target.parentElement.dataset.id;
    setId(id);
    setMessageModals(true);
}

function lifting(id){
    props.getId(id);
    setMessageModals(false);
}

function no(){
    setMessageModals(false);
}


    return(
        <Card className = {styles.users}>
            {messageModals && <NewModal no={no} id={id} lifting={lifting} />}
           <ul>
               {props.users.map(user=> {  
                   return <li key={user.id} data-id={user.id}>
                      {user.name} {user.age} years old
                      <Button onClick={deleteHandler} >Delete</Button>
                  </li>           
         })}
           </ul>
        </Card> 
    )
}


export default UsersList