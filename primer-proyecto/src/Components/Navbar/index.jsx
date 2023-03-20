import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
   return(
  <nav className={styles.container}>
    <Link to="/home"><p>Home</p></Link>
    <Link to="/productos"><p>Products</p></Link>
    <Link to="/cart"><FiShoppingCart/></Link>
  </nav>
   )
}

export default Navbar