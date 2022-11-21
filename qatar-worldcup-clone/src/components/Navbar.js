import React, { useState } from "react";
import { Link } from "react-router-dom";

import naver from "../assets/images/mainpage/naver.svg";
import qatar from "../assets/images/mainpage/qatar.svg";
import useMatchInfo from "../context/matchContext";
import Sidebar from "./Sidebar";
import { navData } from "../dummy/text";

import "./Navbar.css";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState("일정");
  const { isFilter, setIsFilter } = useMatchInfo();

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
                onClick={(e) => {
                  setIsSelected(e.target.name);
                  setIsFilter(false);
                }}
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
          <Sidebar
            onClick={(e) => {
              setIsSelected(e.target.name);
              setIsFilter(false);
            }}
          />
          {console.log({ isSelected, isFilter })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
