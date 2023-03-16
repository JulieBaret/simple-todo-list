import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <h1 class="title">This is my <mark class="highlight">To-Do</mark> List</h1>
            <p class="text-content">Here are all the tasks I want to accomplish (or at least try to...) !</p>
        </>
    );
};

export default Header;