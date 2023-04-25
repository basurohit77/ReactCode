import React, { useState} from "react";
//import Button from '@mui/material/Button';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './App.css';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        tittle: "",
        content: "",
    });

    const inputEvent = (e) => {
        const {name, value} = e.target;
        setNote((preval) => {
            // console.log(preval);
            return {...preval, [name]: value,};
        });
    };

    const addEvent = () => {
        console.log("Before pass")
        console.log(note);
        props.passnote(note);
        setNote({ tittle: "", content: "", });
    };

    return (
        <>
            <div className="createnote_head" >
            <div className="main_note">
                <form>
                    <input 
                        type="text"
                        name="tittle"
                        value={note.tittle}
                        onChange={inputEvent}
                        placeholder="Tittle"
                        autoComplete="off"
                    />
                    <br />
                    <textarea
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={inputEvent}
                        placeholder="Content"
                    ></textarea>
                </form>
                <div className="add_sign" >
                    <Button  onClick={addEvent} >
                        <AddIcon  className="plus_sign" />
                    </Button>
                </div>
                
            </div>
            </div>
       </> 
    );

};
export default CreateNote;