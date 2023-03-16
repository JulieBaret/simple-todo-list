import React, { useState } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import './Tasks.css';

const Tasks = () => {
    //array of tasks
    const [tasks, setTasks] = useState([]);

    //one task
    const [newTask, setNewTask] = useState("");

    //setting one task
    const addTask = ({ target }) => {
        setNewTask(target.value);
    }
    
    //add newTask to tasks
    const handleClick = (event) => {
        event.preventDefault();
        setTasks((tasks) => [...tasks, newTask]);
        //to restart from an empty string
        setNewTask("");
    }

    const removeTask = (value) => {
        setTasks((current) => 
            current.filter((task) => task !== value)
        );
    }

    console.log(newTask);
    console.log(tasks);

    return (
        <>
        < Form handleClick={handleClick} newTask={newTask} addTask={addTask}/>
        < List tasks={tasks} removeTask={removeTask} />
        </>
        

    );
};

export default Tasks;