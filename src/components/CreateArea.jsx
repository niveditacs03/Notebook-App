import React, { useState } from "react";
import "./index.css"

function CreateArea(props) {

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.handleChange} value={props.note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange} value={props.note.content} />
        <button onClick={props.handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
