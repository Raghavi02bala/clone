import React from 'react'
import logo from './images/xn_logo.jpeg';
import './Header.css';
import { AiFillHome, AiFillLike, AiOutlineTags,AiOutlineFieldTime,AiFillFolder } from "react-icons/ai";

function Header() {
    return (
        <nav className="header">
            <img className="header__logo"
                    src={logo}
                    alt="" />
            <div className="header__icons">
            <div className="header__box">
            <AiFillHome className="header__icon"/>
            <span className="header__text">HOME</span>
            </div>
            <div className="header__box">
            <AiFillLike className="header__icon"/>
            <span className="header__text">HOTTEST VIDEOS</span>
            </div>
            <div className="header__box">
            <AiOutlineTags className="header__icon"/>
            <span className="header__text">NEWEST VIDEOS</span>
            </div>
            <div className="header__box">
            <AiOutlineFieldTime className="header__icon"/>
            <span className="header__text">LONGEST VIDEOS</span>
            </div>
            <div className="header__box">
            <AiFillFolder className="header__icon"/>
            <span className="header__text">CATEGORIES</span>
            </div>
            </div>                    
        </nav>
    );
}

export default Header;
