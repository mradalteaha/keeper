import React, { useEffect, useState } from "react";
import Heading from "../components/commonComponents/Heading";
import Footer from "../components/commonComponents/Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { databaseRef } from "../firebase";
import { child, push, get ,remove} from "firebase/database";
import SignInUpForm from "./SignInUpForm/SignInUpForm";
import {useSelector} from 'react-redux'




function App() {

  const Logged = useSelector( state => state.loggedReducer) ;

  
  const [notes, setNotes] = useState([])
  const [newNoteAdded, setNotesAdded] = useState(false)
 
 
  
  useEffect(()=>{ // this use effect is for adding notes
    
    let didCancel = false 
    async function fetchNotes(){
  
    if (!didCancel){
      await get(child(databaseRef, `Accounts/${Logged.loggedUserName}`)).then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val().Notes;
          if(data !==undefined){
            const Notes = Object.entries(snapshot.val().Notes)
          
            setNotes(Notes)
          
          }
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      
    }

    }
    fetchNotes()

  },[Logged.isLogged,newNoteAdded,Logged.loggedUserName]);

 




  function addNote(note) {
    var item = {
      title: note.title,
      content: note.content
    }

    const accReference = child(databaseRef, `Accounts/${Logged.loggedUserName}/Notes`);

    

    push(accReference, item).then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!")
    })
      .catch((error) => {
        // The write failed...
        console.log("The write failed...")

      });

    
    setNotesAdded(!newNoteAdded)

  }





  function deleteNote(key) { 
      console.log(key)
    const noteReference = child(databaseRef, `Accounts/${Logged.loggedUserName}/Notes/${key}`);

    

    remove(noteReference).then(() => {
      // Data saved successfully!
      console.log("Note removed successfully!")
      setNotesAdded(!newNoteAdded)
    })
      .catch((error) => {
        // The write failed...
        console.log("The write failed...")

      });

  }
  
  
  return (
    <div>
      <Heading />
      {Logged.isLogged ?
        <CreateArea onAdd={addNote} />

        : <SignInUpForm key={"SignInUpForm"}  />}

        {
        Logged.isLogged ?
          notes.map((noteItem, index) => {
            return <Note onDelete={deleteNote} key={noteItem[0]} id={noteItem[0]} title={noteItem[1].title} content={noteItem[1].content} />
          })

          : null
      }
    
      <Footer />
    </div>
  );
}

export default App;
