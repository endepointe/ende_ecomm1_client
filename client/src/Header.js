import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {
  useStateValue,
} from './StateProvider';

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">

        <div className="header_option">
          <span className="header_option_1">
            Hello Guest
          </span>
          <span className="header_option_2">
            Sign In
          </span>
        </div>

        <div className="header_option">
          <div className="header_option">
            <span className="header_option_1">
              Returns
          </span>
            <span className="header_option_2">
              & Orders
          </span>
          </div>
        </div>

        <div className="header_option">
          <div className="header_option">
            <span className="header_option_1">
              Your
          </span>
            <span className="header_option_2">
              Prime
          </span>
          </div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_option_2 header_basketCount ">
            {basket?.length}
          </span>
        </div>
      </Link>

    </div>
  )
}

export default Header;