import React, { useState } from "react";
import { Link } from "react-router-dom";

import RhombusContainer from "../utils/RhombusContainer";
import useMatchInfo from "../context/matchContext";
import { listData } from "../dummy/text";

import "./MatchSchedule.css";

const MatchSchedule = () => {
  const [isSelected, setIsSelected] = useState("전체");
  const { setIsFilter } = useMatchInfo();

  const activeHandler = (e) => {
    setIsSelected((prev) => {
      return e.target.name;
    });
  };

  return (
    <div className="schedule__container">
      {listData.map((item, idx) => (
        <div key={item.id} style={{ display: "flex" }}>
          <button
            className={
              isSelected === item.name
                ? "schedule__button schedule__button--active"
                : "schedule__button"
            }
            onClick={() => setIsFilter(false)}
          >
            <Link to={item.path} name={item.name} onClick={activeHandler}>
              {item.name}
            </Link>
          </button>
          {(idx === 0 || idx === 1) && <RhombusContainer />}
        </div>
      ))}
    </div>
  );
};

export default MatchSchedule;
