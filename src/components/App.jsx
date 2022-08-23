import React, {  useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { noteRef } from "../firebase";

function App() {

    const [notes , setNotes] = useState([])

    function addNote(note){
        console.log(note)
        setNotes(prevNote => {
           return [...prevNote,note]
        });
       noteRef.push(note);
    }

    function deleteNote(id){ //deleting from the array
        setNotes(prevNote =>{
            return prevNote.filter((item,index)=>{
                return index!==id
            })
        })
    }
  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem ,index)=>{
        return <Note onDelete={deleteNote} key={index} id={index} title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
