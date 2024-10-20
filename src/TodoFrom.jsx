import ListItem from "@mui/material/ListItem"
import TextField from "@mui/material/TextField"
import AddTaskIcon from '@mui/icons-material/AddTask';
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import "./design/App.css";
export default function TodoForm({addTodo, removeAllTodos}) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo (text);
        setText("");
    }


    return (
        <ListItem className="add-todo">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic"
                    label="Add a new task"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    required
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="create todo"
                                edge="end"
                                type="submit"
                            >
                                <AddTaskIcon />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </form>
            <button className="but-an" onClick={removeAllTodos} > <DeleteIcon sx={{ color: "red",}}/> All</button>            

        </ListItem>
    )
}
