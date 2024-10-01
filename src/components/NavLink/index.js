import styles from './NavLink.module.css';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};

export default NavLink;