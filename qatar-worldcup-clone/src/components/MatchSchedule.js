import React from "react";
import "./MatchSchedule.css";
import useMatchInfo from "../context/matchContext";
import RhombusContainer from "../utils/RhombusContainer";
import { Link } from "react-router-dom";

const MatchSchedule = () => {
  const { isFilter, setIsFilter } = useMatchInfo();

  return (
    <div className="schedule__container">
      <button
        className={
          isFilter
            ? "schedule__button"
            : "schedule__button schedule__button--active"
        }
        onClick={() => setIsFilter(false)}
      >
        <Link to="/">전체</Link>
      </button>
      <RhombusContainer />
      <button className="schedule__button">
        <Link to="/league">조별리그</Link>
      </button>
      <RhombusContainer />
      <button className="schedule__button">
        <Link to="/tournament">토너먼트</Link>
      </button>
    </div>
  );
};

export default MatchSchedule;
