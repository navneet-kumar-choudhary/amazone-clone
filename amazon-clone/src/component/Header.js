import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      {/* logo on the left-> image */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      {/* 4 Links on the right */}
      <div className="header_nav">
        {/* 1st link */}

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* shopping basket icon */}
            <ShoppingBasketIcon></ShoppingBasketIcon>
            {/*  Number of items in the basket*/}
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
