import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoFrom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./design/App.css";

// const initialTodos = [
//     { id: 1, text: 'Learn React', completed: true },
//     { id: 2, text: 'Learn Vite', completed: true },
//     { id: 3, text: 'Build something awesome!', completed: false }
// ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data;

};

function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        });
    }

    const removeAllTodos = () => {
        setTodos([]);
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(t => {
                return t.id === id ? { ...t, completed: !t.completed } : t;
            });
        });
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { id: crypto.randomUUID(), text: text, completed: false }];
        });
    }


    return (
        <body className='shivam'>
            <Box className="container" >
                <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                    Todo List
                </Typography>
                <List className='todo-list'>
                    <TodoForm addTodo={addTodo} removeAllTodos={removeAllTodos} />
                    {todos.map((todo) => {
                        return <TodoItem todo={todo}
                            key={todo.id}
                            removeTodo={() => removeTodo(todo.id)}
                            toggle={() => toggleTodo(todo.id)}
                        />
                    })}
                </List>
            </Box>
        </body>

    )


};

export default TodoList;