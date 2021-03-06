import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/custom">custom job</Link>
          </li>
          <li>
            <Link to="/note">Note Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
