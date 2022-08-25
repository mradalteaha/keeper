
   

const loggedReducer = (state = { isLogged :  false , loggedUserName : ''} , action ) => {
    switch (action.type) {
        case 'SIGN_IN': {
            console.log(action)
            let newState = {
                isLogged :  true , loggedUserName : action.payload.username ,
            }
           
        return newState
    } 
    
        default:
            return state
            
    }
}

export default loggedReducer;