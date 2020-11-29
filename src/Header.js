import React from 'react'
import logo from './images/xn_logo.jpeg';
import './Header.css';
import { AiFillHome } from "react-icons/ai";

function Header() {
    return (
        <nav className="header">
            <img className="header__logo"
                    src={logo}
                    alt="" />
            <div className="header__icons">
            <div className="header__box">
            <AiFillHome className="header__home"/>
            <span className="header__text">HOME</span>
            </div>
            </div>
                    
        </nav>
    );
}

export default Header;
