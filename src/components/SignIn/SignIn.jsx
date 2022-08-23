import React, { useState } from "react"
import './SignIn.css'
import { databaseRef } from "../../firebase";
import { child,onValue} from 'firebase/database'
const accRef = child(databaseRef,"Accounts");

function SignIn(props){

    const [account, setUsername] = useState({ // useState to fetch the account from the db
        username:''
        ,password : ''
        ,userID : ''
    }) 
    
    const [foundUser , foundUserUpdate]  = useState(false);
    
    function passPa(){
        console.log("pass pa has been called")
        console.log(account)
        props.passParam(account);
    }

    function handleClick(event){ //getting the element out of the form 
        var Account = {
            username:document.getElementById("username").value
            ,password:document.getElementById("password").value
        }
        console.log("sign in button triggered")

        console.log(Account)

         onValue(accRef,  (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childKey  = childSnapshot.key
              const childData = childSnapshot.val();
              if (childData.username === Account.username && childData.password === Account.password){
                console.log("found User")
                foundUserUpdate(true)
                setUsername({
                    username:childData.username
                    ,password : childData.password
                    ,userID : childKey
                })

              }
              
          
            });
          }, {
            onlyOnce: true
          })


          console.log(foundUser);
          if(!foundUser){
            console.log("user doesn't exist")
            
          }
          else{
            console.log("user exist")
            passPa();
            
        }
    

        event.preventDefault();

    }


    return (
        <div>

        <h1> Sign In</h1>
        <form onSubmit = {handleClick } >
       
            <input 
             id='username'
             name= "username"
            type="text" placeholder="UserName" ></input>
            <input 
             id='password'
             name= "password"
            type="password" placeholder="PassWord"></input>
     
          
          <br></br>
            
        <button type="submit">Submit</button>

        </form>

        </div>
    )

}



export default SignIn ;
