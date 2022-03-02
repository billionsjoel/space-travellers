import './css/header.scss';
import React from 'react';
import NavLink from './Nav';

const Header = () => (
  <header className="header d-flex align-items-center ">
    <div className="logo">
      <img src="./logo.png" alt="planet logo" className="click" />
      <h1 className="heading">Space Traveller&apos;s Hub</h1>
    </div>

    <NavLink />
  </header>
);

export default Header;
