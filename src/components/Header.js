import React from 'react';

const Header = () => (
  <header className="header d-flex ai-c">
    <img src="./logo.png" alt="planet logo" className="click" />
    <nav className="navBar">
      <ul className="d-flex">
        <li className="click">Rockets</li>
        <li className="click">Missions</li>
        <li className="click">My Profile</li>
      </ul>
    </nav>
  </header>
);

export default Header;
