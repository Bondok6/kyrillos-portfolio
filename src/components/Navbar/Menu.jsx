import { Link } from 'react-router-dom';
import menuLogo from '../../assets/images/nav-logo.PNG';

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="menu">
      <div className="menu__logo" onClick={toggleMenu}>
        <Link to="/">
          <img src={menuLogo} alt="logo" />
        </Link>
      </div>

      <ul className="menu__list" onClick={toggleMenu}>
        <li className="menu__list-item">
          <Link to="/about">About Me</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/work">My Work</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>

      <ul className="menu__social">
        <li className="menu__social-icon">
          <a href="https://github.com/Bondok6" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </li>
        <li className="menu__social-icon">
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

export default Menu;
