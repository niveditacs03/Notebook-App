import React, { useState } from "react";
import "./index.css"
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

  const[check,setCheck]=useState(false);
  function handleCheck()
  {
    setCheck(true)
  }
  return (
    <div>
      <form>
       {check &&
        <input name="title" placeholder="Title" onChange={props.handleChange} value={props.note.title}  />}
       
        <textarea name="content"  placeholder="Take a note..."  onChange={props.handleChange} value={props.note.content} onMouseEnter={handleCheck} rows={check?3:1} />
        <button onClick={props.handleClick}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
