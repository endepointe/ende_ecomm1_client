import React from 'react';
import './Navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {
  useStateValue,
} from './StateProvider';
//import { auth }

const Navbar = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="navbar">
      <Link to='/'>
        <img
          className="navbar_logo"
          src="http://via.placeholder.com/100x60?text=Logo"
          alt="" />
      </Link>

      <div className="navbar_search">
        <input className="navbar_searchInput" type="text" />
        <SearchIcon className="navbar_searchIcon"></SearchIcon>
      </div>

      <div className="navbar_nav">
        <Link to={!user && '/login'}>

          <div className="navbar_option">
            <span className="navbar_option_1">
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className="navbar_option_2">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <div className="navbar_option">
          <div className="navbar_option">
            <span className="navbar_option_1">
              Returns
          </span>
            <span className="navbar_option_2">
              & Orders
          </span>
          </div>
        </div>

        <div className="navbar_option">
          <div className="navbar_option">
            <span className="navbar_option_1">
              Your
          </span>
            <span className="navbar_option_2">
              Account
          </span>
          </div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="navbar_optionBasket">
          <ShoppingBasketIcon />
          <span className="navbar_option_2 navbar_basketCount ">
            {basket?.length}
          </span>
        </div>
      </Link>

    </div>
  )
}

export default Navbar;