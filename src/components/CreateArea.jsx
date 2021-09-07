import React, {useState} from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setIsExpanded]= useState(false);

    function handleChange(event) {
        const {name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    }

    function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    function expand() {
        setIsExpanded(true);
    }

    return(
        <div>
            <form className = "create-note">
              {isExpanded && (
                <input name = "title" onChange = {handleChange} value={note.title} placeholder = "Title" />

              )}
                <textarea onClick= {expand} name = "content" onChange = {handleChange} value = {note.content} placeholder = "Take a note" rows  = {isExpanded ? 3 : 1 } />
                <Zoom in = {isExpanded}>
                    <Fab onClick = {submitNote}>
                    <AddBoxIcon />
                    </Fab>

                </Zoom>
            </form>
        </div>
    )
    
}

export default CreateArea;