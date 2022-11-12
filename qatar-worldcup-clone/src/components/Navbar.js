import React from "react";
import "./Navbar.css";
import naver from "../assets/images/mainpage/naver.svg";
import qatar from "../assets/images/mainpage/qatar.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav>
      <div className="logo__container">
        <img src={naver} alt="" width="26px" height="26px" />
        <img src={qatar} alt="" width="164px" height="31px" />
      </div>
      <ul className="nav__container">
        <li>홈</li>
        <li>뉴스</li>
        <li>일정</li>
        <li>참가국</li>
        <li>FIFA</li>
      </ul>
      <div className="icon__container">
        <GiHamburgerMenu className="select__icon" />
      </div>
    </nav>
  );
};

export default Navbar;
