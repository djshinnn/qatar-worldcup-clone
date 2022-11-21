import React, { useState } from "react";

import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./Sidebar.css";

const Sidebar = ({ onClick }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <div className="sidebar__container">
        <Link to="#" className="sidebar__menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "sidebar__menu active" : "sidebar__menu"}>
        <ul className="sidebar__menu--items" onClick={showSidebar}>
          <li className="sidebar__toggle">
            <Link to="#" className="sidebar__menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className="sidebar__text">
              {item.icon}
              <Link
                to={item.path}
                className="sidebar__title"
                name={item.name}
                onClick={onClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
