import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [note , noteUpdate] = useState({
        title:"",
        content:""
    })

    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event){
        
        const {name , value } = event.target;

        noteUpdate(prevNote => {
            return {
                ...prevNote ,
                [name] : value
               
            }
        })

    }
    function submitNote(event){

        props.onAdd(note);
        noteUpdate({
          title:"",
          content:""
      })
        setExpanded(false);


        event.preventDefault();
    }

    function expand() {
      setExpanded(true);
    }


  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
