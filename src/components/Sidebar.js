import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="sidebar">
      <h2>NGO Partner</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Student Registration <span className={dropdownOpen ? 'arrow-up' : 'arrow-down'}></span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/formA">Form A</Link>
              <Link to="/formB">Form B</Link>
            </div>
          )}
        </li>
        <li><Link to="/view-students">View Students</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
