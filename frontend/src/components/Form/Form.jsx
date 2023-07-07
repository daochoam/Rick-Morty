import React from 'react'; 
import styles from './Form.module.css';
import {Handler} from '../../services';



function Form(props) {
  const [userData,setUserData]=React.useState({
    email:"",
    password:"",
  })
  
  return (
        <form onSubmit={Handler.handlerSubmit}>
          <div className={styles.Form}>
            <label htmlFor="username">email: </label>
            <input type="text" name="email" value={userData.email} 
            onChange={(e) =>{Handler.handlerInputChange (e,userData,setUserData)}}/>
          </div>
          
          <div>
            <label htmlFor="password">password:</label>
            <input type="text" name="password" value={userData.password} 
            onChange={(e) =>{Handler.handlerChange(e,userData,setUserData)}}/>
          </div>
          <button type="submit">LOGIN</button>
        </form>
        )
  };

export default Form;