import React from 'react';
import {Link} from 'react-router-dom';
import './css/message.css';

const Header = ()=> {
    return(
        <header className='header'>
       <ul className="ul-menu">
            <li>
                <Link to = '/' >Home</Link>
            </li>
            <li>
                <Link to = '/profile' >Profile</Link>
            </li>
            <li>
                <Link to = '/articles' >Articles</Link>
            </li>
            <li>
                <Link to = '/animenews' >AnimeNews</Link>
            </li>
        </ul>
        </header>
    )
}

export default Header;
