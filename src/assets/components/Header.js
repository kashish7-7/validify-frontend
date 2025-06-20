import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo linking to root ("/") */}
      <div className="logo">
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          <img src="/validifylogo2.png" alt="Validify Logo" style={{ height: '60px' }} />
        </Link>
      </div>


  {/* Register button always visible */}

 {/* Hamburger Icon - appears to the right of button */}
  <div className="hamburger" onClick={toggleMenu}>
    ☰
  </div>
  

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
         
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        
      <NavLink
  to="/register"
  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
  onClick={() => setMenuOpen(false)}
>
  <button style={{
    padding: '10px',
    backgroundColor: '#f27510',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }}>
    Register Your Business
  </button>
  
</NavLink>

        <NavLink
          to="/how-it-works"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          onClick={() => setMenuOpen(false)}
        >
          How It Works
        </NavLink>
      
      </nav>
    </header>
  );
}

export default Header;
