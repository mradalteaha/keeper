import React from 'react'
import './SignUp.css'
import { databaseRef } from "../../firebase";
import { child,set,get} from 'firebase/database'

const accRef = child(databaseRef,"Accounts");

function SignUp(){
    
    function handleClick(event){ //getting the element out of the form 
        
        
        var Account = {
            fullName:document.getElementById("fullName").value
            ,email : document.getElementById("email").value
            ,username:document.getElementById("username").value
            ,password:document.getElementById("password").value
        }

          
          get(child(databaseRef, `Accounts/${Account.username}`)).then((snapshot) => {
            if (snapshot.exists()) {
              alert("user Already Exist")
               
            } else {
              let entry = child(accRef,Account.username);
              set(entry , Account).then(() => {
               // Data saved successfully!
               
               alert("Account Creates Successfully!");
             })
             .catch((error) => {
               // The write failed...
               alert("The write failed...")
     
             });
            }
          }).catch((error) => {
            console.error(error);
          });

       
     
       
       

         event.preventDefault();

    }
    



    return (<div>

        <h1> Sign Up</h1>
        <form onSubmit = {handleClick } >
        <input 
             id='fullName'
             name= "fullName"
            type="text" placeholder="Full Name" ></input>
            <input 
             id='email'
             name= "email"
            type="text" placeholder="Email" ></input>
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

        </div>)

}
export default SignUp ;