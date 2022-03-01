import './css/header.scss';
import { Link } from 'react-router-dom';

function navLinks() {
  return (
    <div className="nav-container">
      <nav className="navBar">
        <ul className="d-flex">
          <li className="click">
            <Link to="/">Rockets</Link>
          </li>
          <li className="click">
            <Link to="/missions">Missions</Link>
          </li>
          <li className="click">
            <Link to="/my-profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navLinks;
