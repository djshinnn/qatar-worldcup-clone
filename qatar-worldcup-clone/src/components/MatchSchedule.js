import React from "react";
import Date from "../utils/Date";
import "./MatchSchedule.css";

const MatchSchedule = ({ matchFilter, matchDate }) => {
  return (
    <div>
      <div className="schedule__container">
        <button className="schedule__button">전체</button>
        <div className="rhombus__container">
          <div className="rhombus"></div>
          <div className="rhombus"></div>
        </div>

        <button className="schedule__button">조별리그</button>
        <div className="rhombus__container">
          <div className="rhombus"></div>
          <div className="rhombus"></div>
        </div>
        <button className="schedule__button">토너먼트</button>
      </div>

      <Date matchFilter={matchFilter} matchDate={matchDate} />
    </div>
  );
};

export default MatchSchedule;
