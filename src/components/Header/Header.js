import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                <h1>Welcome to  my Rest Countries.</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;