import './Navbar.css';
import logo from '../Assets/logo.png';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const {getTotalCartItem} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="Logo" />
            <Link to='/'>E-Commerce Store</Link>
        </div>
        <div className="nav-links">
            <Link to="/">Shop</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kid">Kid</Link>
        </div>
        <div className="cart">
          <Link to='cart'><i className="ri-shopping-cart-line"></i></Link>
          <div className="nav-count">{getTotalCartItem()}</div>
          <Link to='/login'><button>Login</button></Link>
        </div>
    </div>
  );
}

export default Navbar