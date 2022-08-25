import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import {useDispatch, useSelector} from 'react-redux'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



function Heading(){

    const Logged = useSelector( state => state.loggedReducer) ;

    const dispatch = useDispatch()
        function handleClick(){
            dispatch({
                type:'USER_LOGOUT',

            })
            
        }
    return (<header>
    <h1> <HighlightIcon/> Keeper  </h1>
    {
        Logged.isLogged ? 
        <button 
     onClick={handleClick}>LOG OUT <ExitToAppIcon/></button> :''
    }  
     
    
    </header>)
}

export default Heading;