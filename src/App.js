import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
//import notes from "./notes"
import './App.css';
import CreateArea from "./components/CreateArea";
import { useState } from "react/cjs/react.development";


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function onDeleting(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    });
  }
  

  return (
    <div className="App">
     <Header />
     <CreateArea 
      onAdd = {addNote}
     />
        {notes.map((noteItem, index) => 
         <Note 
           key = {index}
           id = {index}
           title = {noteItem.title}
           content ={noteItem.content}
           onDelete = {onDeleting}
         />
       )}
     <Footer />
    </div>
  );
}

export default App;
