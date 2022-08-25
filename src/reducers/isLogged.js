import storage from 'redux-persist/lib/storage'

let defaultState ={ isLogged :  false , loggedUserName : ''}
   

const loggedReducer = (state = defaultState , action ) => {
    switch (action.type) {
        case 'SIGN_IN': {
            let newState = {
                isLogged :  true , loggedUserName : action.payload.username ,
            }
           
        return newState
    } 
        case 'USER_LOGOUT' :{

            storage.removeItem('persist:root')
            window.location.reload()

            return defaultState;
        }

    
        default:
            return state
            
    }
}

export default loggedReducer;