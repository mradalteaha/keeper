import React, { useState } from "react";
import Heading from "../components/commonComponents/Heading";
import Footer from "../components/commonComponents/Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { databaseRef } from "../firebase";
import { child, push, get } from "firebase/database";
import SignInUpForm from "./SignInUpForm/SignInUpForm";
import {useSelector} from 'react-redux'

const noteRef = child(databaseRef, "notes");
//const accRef = child(databaseRef, "Accounts");



function App() {

  const Logged = useSelector( state => state.loggedReducer) ;

  console.log(Logged)

  const [notes, setNotes] = useState([])
 


  /* failed to load notes will try another way using redux

  onValue(noteRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key
      const childData = childSnapshot.val();
      var temp = {
        key: childKey,
        title: childData.title
        , content: childData.content
      }


    });
  }, {
    onlyOnce: true
  });
  */




  function addNote(note) {
    var item = {
      title: note.title,
      content: note.content
    }

    push(noteRef, item).then(() => {
      // Data saved successfully!
      console.log("Data saved successfully!")
    })
      .catch((error) => {
        // The write failed...
        console.log("The write failed...")

      });
    setNotes(prevNote => {
      return [...prevNote, note]
    })


  }



  function getSignedUser(Account) { // this function is heelp function to pass params
    console.log("get Signed user got called")

    if (Account.username !== '') {
      get(child(databaseRef, `Accounts/${Account.username}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("found User in get signed User")

         

        } else {
          alert("user doesn't exist")
        }
      }).catch((error) => {
        console.error(error);
      });
    }

  }



  function deleteNote(id) { //deleting from the array
    setNotes(prevNote => {
      return prevNote.filter((item, index) => {
        return index !== id
      })
    })
  }
  return (
    <div>
      <Heading />
      {Logged.isLogged ?
        <CreateArea onAdd={addNote} />

        : <SignInUpForm key={"SignInUpForm"} passPa={getSignedUser} />}


      {
        Logged.isLogged ?
          notes.map((noteItem, index) => {
            return <Note onDelete={deleteNote} key={noteItem.key} id={index} title={noteItem.title} content={noteItem.content} />
          })

          : null
      }
      <Footer />
    </div>
  );
}

export default App;
