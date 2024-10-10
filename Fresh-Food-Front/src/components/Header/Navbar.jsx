import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/pictures/fresh-food.jpg';
import phoneLogo from '../../assets/pictures/icon-phone-header.png';
import { faBars, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    if (token && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    }
  }, []);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Listen to localStorage changes (in case of external changes to auth)
  useEffect(() => {
    const onStorageChange = () => {
      const token = localStorage.getItem('token');
      const storedUsername = localStorage.getItem('username');
      if (token && storedUsername) {
        setIsAuthenticated(true);
        setUsername(storedUsername);
      } else {
        setIsAuthenticated(false);
      }
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return (
    <header className="navbar d-flex flex-sm-column flex-row-reverse justify-content-sm-evenly justify-content-between p-0 m-0">
      <div className="navbar-bottom d-flex flex-sm-row flex-column justify-content-evenly align-items-center gap-0 p=0">
        <span className="navbar-phone">
          <img src={phoneLogo} alt="Phone Logo" />
          <span className="phone-number">070-7782-9137</span>
        </span>

        <div className="navbar-contact d-flex gap-5 align-items-center">
          <div className="navbar-account d-flex gap-1">
            {isAuthenticated ? (
              <>
                <span className='mx-2'>{username}</span>
                <a href="#" onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} /></a>
              </>
            ) : (
              <>
                <Link to="/login">Login |</Link>
                <Link to="/register"> Register</Link>
              </>
            )}
          </div>
        </div>

        <div className="navbar-icons">
          <span className="navbar-cart">
            <Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
          </span>
          <span className="navbar-cart">
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          </span>
        </div>
      </div>

      <nav className="navbar-menu d-flex flex-sm-row flex-column justify-content-around gap-1">
        <div className="hamburger d-flex justify-content-center align-items-center gap-2">
          <div className="hamburger-menu d-sm-none" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        <div className={`navbar-links d-sm-flex justify-content-center align-items-center gap-sm-3 gap-0 ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/products" className="navbar-link">Products</Link>
          <Link to="/blogs" className="navbar-link">Blogs</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
