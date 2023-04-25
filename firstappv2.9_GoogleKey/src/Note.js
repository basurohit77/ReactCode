import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './App.css';

const Note = (props) => {
    const deleteNote = () => {
        props.deletenote(props.id);
    };
    return (
        <>
            <div className="note">
                    <p>Tittle: {props.tittle}</p>
                    <p>Content: {props.content}</p>
             
                    <button className="note_del_btn" onClick={deleteNote}>
                         <DeleteOutlineIcon className="deleteIcon" />
                    </button>
            </div>
       </> 
    );
}

export default Note;