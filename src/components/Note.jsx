import React from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';




function Note(props){
    function deleteMe(){
        props.onDelete(props.id)
    }
 
return (
    <div className="note">
<h1>
{props.title}
</h1>
<p>
    {props.content}
</p>
<button onClick={deleteMe}>{<DeleteSweepIcon style={{'color':'black'}}/>}</button>
       

</div>)
}

export default Note;