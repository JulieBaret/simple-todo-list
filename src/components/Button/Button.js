import React from 'react';
import './Button.css';

const Button = () => {
    return (
        <button type="submit" class="text-white absolute right-1 bottom-1.5 md:right-2 md:bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
    );
};

export default Button;