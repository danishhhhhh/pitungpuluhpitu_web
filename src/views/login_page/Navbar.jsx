import React from "react";
import '../../assets/profile1.png'; 
import './Navbar.css';
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>-- LOGIN --</li>
      </ul>
      <div className="nav-right">
        <div className="user-icon-container">
          <div className="user-icon-wrapper"> {/* Wrap icon */}
            <FaRegUserCircle className="user-icon" />
          </div>
        </div>
        <button className="navbar-button" style={{
          height: 60,
          backgroundColor: 'yellow',
          color: 'black'
        }}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
