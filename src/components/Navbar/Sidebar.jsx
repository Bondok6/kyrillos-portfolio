import { Link } from 'react-router-dom';
import sidbarLogo from '../../assets/images/nav-logo.PNG';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img src={sidbarLogo} alt="logo" />
        </Link>
      </div>

      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/work">My Work</Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <ul className="sidebar__social">
        <li className="sidebar__social-icon">
          <a href="https://github.com/Bondok6" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </li>
        <li className="sidebar__social-icon">
          <a
            href="https://www.linkedin.com/in/kyrillos-hany/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
