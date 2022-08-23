import React, {  useState }  from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

function SignInUpForm(props){
    const[isSignIn , setSignIn]= useState(true)
 
  
    
    function handleClick(event){
        setSignIn(!isSignIn);
        event.preventDefault();
    }


    function getCurrentUser(id){
        console.log("get Current User has been called")
        
        console.log(id)
      
        props.passPa(id)
    }
    

    return (
       <div> {
         isSignIn ? <SignIn key = {"SignIn"} passParam={getCurrentUser}/> : <SignUp/>
    }
    <br></br>
    <form>
    <button 
    
     onClick={handleClick} type="submit">{isSignIn ? 'SignUp' :'SignIn' }</button>
    
     
     </form>
    
    </div>
    )


}

export default  SignInUpForm ;