

const noteReducer = (state = [] , action ) => {
    switch (action.type) {
        case 'LOAD_NOTES': {
            console.log("inside loading notes reducer")
            console.log(action)
            let newState = [...state , action.payload]
           
            
            console.log("the new state of notes")
        console.log(newState)
        return newState
    } 
    
        default:
            return state
            
    }
}

export default noteReducer;