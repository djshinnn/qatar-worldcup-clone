import React from "react";
import "./Navbar.css";
import naver from "../assets/images/mainpage/naver.svg";
import qatar from "../assets/images/mainpage/qatar.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__container">
          <img src={naver} alt="" width="26px" height="26px" />
          <img src={qatar} alt="" width="164px" height="31px" />
        </div>
        <ul className="list__container">
          <li>
            <Link to="/home">홈</Link>
          </li>
          <li>
            <Link to="/news">뉴스</Link>
          </li>
          <li>
            <Link to="/">일정</Link>
          </li>
          <li>
            <Link to="/countries">참가국</Link>
          </li>
          <li>
            <Link to="/fifa">FIFA</Link>
          </li>
        </ul>
        <div className="icon__container">
          <GiHamburgerMenu className="select__icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
