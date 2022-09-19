import OpenMenu from '../../utils/open-menu';
import CloseMenu from '../../utils/close-menu';

const MenuIcon = ({ isMenuOpen, setIsMenuOpen }) => (
  <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    {isMenuOpen ? <CloseMenu /> : <OpenMenu />}
  </button>
);

export default MenuIcon;
