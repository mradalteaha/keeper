import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import {useDispatch} from 'react-redux'
import Persistor from '../../store'



function Heading(){

    const dispatch = useDispatch()
        function handleClick(){
            dispatch({
                type:'USER_LOGOUT',

            })
            Persistor.purge();
        }
    return (<header>
    
    <h1> <HighlightIcon/> Keeper </h1>  
    <button 
     onClick={handleClick}>lOG OUT</button>
    </header>)
}

export default Heading;