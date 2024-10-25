import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme); 
  }, []);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      setTheme('light-theme');
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light-theme');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>Email Client Application</h1>
        <button onClick={toggleTheme} className="toggle-theme-btn">
          {theme === 'light-theme' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
