import React,{useState}  from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notesList.js";
import CreateArea from "./CreateArea.jsx";

function App() {
  const [notes, setNotes] = useState(Notes)

  function addItem(item){
    setNotes( prev => [...prev, item] )
  }

  function deleteItem(id){
    // setNotes( notes.filter(item=> item.id !== id) )
    setNotes ( prev => prev.filter( (noteItem, index) => index !== id ))
  }

  return (
    <div>
      <Header />

      <CreateArea addItem={addItem} />

      {notes.map((note,index) => (
        <Note title={note.title} text={note.text} key={index} id={index} onDelete={deleteItem} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
