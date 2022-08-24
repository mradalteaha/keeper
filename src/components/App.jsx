import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { databaseRef } from "../firebase";
import { child, push, onValue, get } from "firebase/database";
import SignInUpForm from "./SignInUpForm/SignInUpForm";

const noteRef = child(databaseRef, "notes");
const accRef = child(databaseRef, "Accounts");



function App() {

  let intitNote = []

  const [notes, setNotes] = useState([])
  const [isSignIn, setSignIn] = useState(false)
  const [account, setUsername] = useState(null)

  console.log("on value function :");

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



  function getSignedUser(Account) {
    console.log("get Signed user got called")

    if (Account.username !== '') {
      get(child(databaseRef, `Accounts/${Account.username}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("found User in get signed User")

          setSignIn(true)

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
      {isSignIn ?
        <CreateArea onAdd={addNote} />

        : <SignInUpForm key={"SignInUpForm"} passPa={getSignedUser} />}


      {
        isSignIn ?
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
