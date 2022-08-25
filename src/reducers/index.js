import loggedReducer from './isLogged'
import noteReducer from './addNote'
import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    loggedReducer:loggedReducer,
    noteReducer:noteReducer
})

const rootReducer = (state , action ) => {
    return reducers(state,action);
} 

export default rootReducer ; 