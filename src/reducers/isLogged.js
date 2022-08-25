
   

const loggedReducer = (state = { isLogged :  false , loggedUserName : ''} , action ) => {
    switch (action.type) {
        case 'SIGN_IN': {
            console.log(action)
            let newState = {
                isLogged :  true , loggedUserName : action.payload.username ,
            }
            console.log("logged in user inside reducer")

        console.log(newState)
        return newState
    } 
    
        default:
            return state
            
    }
}

export default loggedReducer;