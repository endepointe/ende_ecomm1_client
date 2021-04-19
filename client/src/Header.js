import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="" />

      <div className="header_search">
        <input type="text" />
      </div>

      <div className="header_nav">

      </div>
    </div>
  )
}

export default Header;