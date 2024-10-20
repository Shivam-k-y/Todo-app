import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

import { useState } from 'react';

export default function TodoItem({ todo, removeTodo, toggle }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        todo.text = newText; // Update the todo text
    };

    const handleChange = (e) => {
        setNewText(e.target.value);
    };


    const labelId = `checkbox-list-label-${todo.id}`;
    return (
        <ListItem
            className='todo-item'
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <ClearRoundedIcon sx={{ color: "red" }} />
                </IconButton>

            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon >
                    <Checkbox
                        className='completed'
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        onClick={toggle}
                        sx={{ color: "green" }}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={isEditing ? (
                    <input type="text" value={newText} onChange={handleChange} />
                ) : (
                    <span>{todo.text}</span>
                )} />
                {isEditing ? (
                    <SendTwoToneIcon onClick={handleSaveClick}/>
                ) : (
                    <EditTwoToneIcon onClick={handleEditClick}/>
                )}
            </ListItemButton>
        </ListItem>
    );


}