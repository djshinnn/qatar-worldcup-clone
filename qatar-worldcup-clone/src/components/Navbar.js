import React, { useState } from "react";
import "./Navbar.css";
import naver from "../assets/images/mainpage/naver.svg";
import qatar from "../assets/images/mainpage/qatar.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { navData } from "../dummy/text";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState("일정");

  const activeHandler = (e) => {
    console.log(e.target.name);

    setIsSelected((prev) => {
      return e.target.name;
    });
  };

  return (
    <nav>
      <div className="nav__container">
        <div className="logo__container">
          <img src={naver} alt="" width="26px" height="26px" />
          <img src={qatar} alt="" width="164px" height="31px" />
        </div>
        <ul className="list__container">
          {navData.map((item, idx) => (
            <li key={item.id}>
              <Link
                name={item.name}
                onClick={activeHandler}
                className={
                  isSelected === item.name
                    ? "list__container--text active--text"
                    : "list__container--text"
                }
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="icon__container">
          <GiHamburgerMenu className="select__icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
