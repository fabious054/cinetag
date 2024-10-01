import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';
import NavLink from 'components/NavLink';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Cinetag Logo" />
      </Link>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/favorites">FAVORITES</NavLink>
      </nav>
    </header>
  );
}	

export default Header;