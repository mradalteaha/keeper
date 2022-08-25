import {createStore} from 'redux'
import rootReducer from './reducers';
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


//Store -> Globalize state

const persistConfig = {
    key : 'main-root',
    storage
}



const persistedReducer = persistReducer(persistConfig,rootReducer)
//Action
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Persistor = persistStore(store)
//reducer 



//dispatch
export {Persistor}
export default store;