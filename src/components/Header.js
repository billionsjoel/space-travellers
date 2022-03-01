import './css/header.scss';
import React from 'react';
import NavLink from './Nav';

const Header = () => (
  <header className="header d-flex align-items-center">
    <img src="./logo.png" alt="planet logo" className="click" />
    <NavLink />
  </header>
);

export default Header;
