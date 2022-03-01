import './css/header.scss';
import React from 'react';
import NavLink from './Nav';

const Header = () => (
  <header className="header d-flex ai-c">
    <img src="./logo.png" alt="planet logo" className="click" />
    <NavLink />
  </header>
);

export default Header;
