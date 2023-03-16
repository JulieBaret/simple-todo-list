import './Form.css';
import React from 'react';
import Button from '../Button/Button';

const Form = ({ handleClick, newTask, addTask }) => {
    return (
        <div className="form-container">
            <form onSubmit={handleClick}>
                <div class="relative">
                    <input value={newTask} onChange={addTask} class="input-content" placeholder="Add a new task" />
                    < Button />
                </div>
            </form>
        </div>
    );
};

export default Form;