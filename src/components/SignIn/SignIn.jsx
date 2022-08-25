import React from "react"
import './SignIn.css'
import { databaseRef } from "../../firebase";
import { child, get } from 'firebase/database'
import { useDispatch } from 'react-redux'
//const accRef = child(databaseRef,"Accounts");
function SignIn() {


  const dispatch = useDispatch();



        function handleClick(event) { //getting the element out of the form 
          var Account = {
            username: document.getElementById("username").value
            , password: document.getElementById("password").value
          }
         

                if (Account.username !== '') {
                  get(child(databaseRef, `Accounts/${Account.username}`)).then((snapshot) => {
                    if (snapshot.exists()) {

                     // const childKey = snapshot.key
                      const childData = snapshot.val();

                      if (childData.username === Account.username && childData.password === Account.password) {
                        // valid account 

                        dispatch({ type: 'SIGN_IN', payload: childData })

                      }

                    } else {
                      alert("user doesn't exist")
                    }
                  }).catch((error) => {
                    console.error(error);
                  })
                }

          event.preventDefault();

        }


  return (
    <div>

      <h1> Sign In</h1>
      <form onSubmit={handleClick} >

        <input
          id='username'
          name="username"
          type="text" placeholder="UserName"></input>
        <input
          id='password'
          name="password"
          type="password" placeholder="PassWord"></input>


        <br></br>

        <button type="submit">Submit</button>

      </form>

    </div>
  )

}



export default SignIn;
