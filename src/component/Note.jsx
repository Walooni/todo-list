import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1> {props.title} </h1>
      <p> {props.text} </p>
      <button onClick={ ()=>props.onDelete(props.id) }> <DeleteIcon fontSize="medium" /> </button>
    </div>
  );
}

export default Note;
