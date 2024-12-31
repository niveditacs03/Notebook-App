import React, { useState } from "react";
import Header from "./components/Heading";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./components/index.css"

function App() {
  const[note,setNote]=useState(
   { title:"",
    content:""});
  const[noteList,setNoteList]=useState([])
  function handleChange(event)
  {
     const {name,value}=event.target;
    setNote((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      }
    }) 
  }
  function handleClick(event)
  {
    event.preventDefault();
    if(note.title.trim()!=="" && note.content.trim()!=="")
    {
      setNoteList((prevValue)=>[...prevValue,note])
      setNote({title:"",content:""});
    }
  }
  function deleteNote(id)
  {
      setNoteList((prevValue)=>{
        return prevValue.filter((item,index)=>{
          return id!==index
        })
      })
  }
  return (
    <div>
      <Header />
      <CreateArea handleChange={handleChange} handleClick={handleClick} note={note}/>
      {noteList.map((noteItem,index)=>(
        <Note title={noteItem.title} content={noteItem.content} key={index} id={index} deleteNote={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
