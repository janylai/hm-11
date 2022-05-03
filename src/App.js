
import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([])
  
  const addUserHandler = (uName, uAge) => {
    setUserList(prevUserList => {
      return[...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
     
    })
  }

  function getId(id){
    let newUserList = userList.filter(user=>{
      return user.id !== id;
    })
    setUserList(newUserList);
  }

  return (
    <div className="App">
       <AddUser onAddUser= {addUserHandler} />
       <UsersList users = {userList} setUserList={setUserList} getId={getId} />
    </div>
  );
}

export default App;
