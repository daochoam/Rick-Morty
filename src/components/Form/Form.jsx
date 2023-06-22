import React from 'react'; 
import styles from './Form.module.css';
import { handleInputChange } from '../../services';

function Form(props) {
  const [userData,setUserData]=React.useState({
    email:"",
    password:"",
  })
  
  return (
        <form>
          <div className={styles.Form}>
            <label htmlFor="username">email: </label>
            <input type="text" name="email" value={userData.email} 
            onChange={(e) =>{handleInputChange(e,userData,setUserData)}}/>
          </div>
          
          <div>
            <label htmlFor="password">password:</label>
            <input type="text" name="password" value={userData.password} 
            onChange={(e) =>{handleInputChange(e,userData,setUserData)}}/>
          </div>
          <button>LOGIN</button>
        </form>
        )
  };

export default Form;