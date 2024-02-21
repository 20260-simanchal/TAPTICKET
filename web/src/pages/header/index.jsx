import React, { useState, useContext } from "react";
import "./header.css";
import { CurrentUserContext } from "../../index";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleNameHover = () => {
    setShowDropdown(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/user/login";
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  return (
    
    <header class="header">

    <a href="#" class="logo"><span style={{ color: '#e91c0d' }}>Tap</span>Ticket</a>

    <nav class="navbar">
        <a href="/">HOME</a>
        <a href="/services">SERVICES</a>
        <a href="/about">ABOUT</a>
        <a href="/gallery">GALLERY</a>
        <a href="/price">PRICE</a> 
        <a href="/review">REVIEW</a>
        <a href="/contact">CONTACT</a>
        <a href="/user/login">LOGIN</a>
        <a href="/signup" className="btn">SIGN UP</a>

        
        {/* {!currentUser?.name && (
          <Link to="/user/login" style={{ color: "white" }}>
            Login
          </Link>
           {currentUser?.name && (
        <div className="name" onMouseEnter={handleNameHover}>
          {currentUser?.name}
          {showDropdown && (
            <div className="dropdown" onMouseLeave={handleDropdownClose}>
              <button className="logout-button" onClick={handleLogoutClick}>
                Logout
              </button>
            </div>
          )}
        </div>)}
        )}
        */}
    </nav>

    <div id="menu-bars" class="fas fa-bars"></div>
</header>

    );
  };

   

export default Header;
