import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <div className = 'navbar'>
            <nav>
                <ul>
                    <li><a href="#IY" class="hover:text-blue-400 ease-in-out duration-500">IY</a></li>
                    <li><a href="#projects" class="hover:text-blue-400 ease-in-out duration-500">Projects</a></li>
                    <li><a href="#experience" class="hover:text-blue-400 ease-in-out duration-500">Experience</a></li>
                    <li><a href="#education" class="hover:text-blue-400 ease-in-out duration-500">Education</a></li>
                </ul>
            </nav>
        </div> 
    );
}

export default Navbar;