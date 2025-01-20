import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
};

const navStyle = {
  display: 'flex',
  listStyleType: 'none',
  gap: '20px',
};

export default Header;
