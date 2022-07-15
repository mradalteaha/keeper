import React from "react";
import Heading from "./Heading"
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";




function App(){
    return (
        <div>
            <Heading />
            {notes.map(card => <Note  key={card.key} title={card.title} notedesc={card.content}/> )}
            <Footer />
            </div>
    )
}

export default App;