import './css/header.scss';
import { NavLink } from 'react-router-dom';

function navLinks() {
  return (
    <div className="nav-container">
      <nav className="navBar">
        <ul className="d-flex">
          <li className="click">
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Rockets</NavLink>
          </li>
          <li className="click">
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li className="click">
            <NavLink to="/my-profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navLinks;
