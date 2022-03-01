import './css/header.scss';
import React from 'react';

const Header = () => (
  <header className="header d-flex ai-c">
    <img src="./logo.png" alt="planet logo" className="click" />
    <NavLink />
);

export default Header;
