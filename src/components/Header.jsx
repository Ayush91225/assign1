import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold">QUESTION</h1>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
