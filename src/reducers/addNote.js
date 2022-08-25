let initialState =  { items: [] } 

const noteReducer = (state = initialState , action ) => {
    switch (action.type) {
        case 'LOAD_NOTES': {
        
            let newState =  { 
                ...state,
                items:[...state.items, action.payload.Notes]
           }
            
        
        console.log(newState)
        return newState
    } 
    
        default:
            return state
            
    }
}

export default noteReducer;