import React from "react";

import useMatchInfo from "../context/matchContext";
import RhombusContainer from "./RhombusContainer";
import { date } from "../dummy/text";

import "./Date.css";

const Date = ({ matchFilter, matchDate }) => {
  const { isFilter, setIsFilter } = useMatchInfo();

  return (
    <div className="date__container">
      {date.map((date) => {
        return (
          <div
            className={
              (date.matchDateFirst === matchDate ||
                date.matchDateSecond === matchDate ||
                date.matchDateThird === matchDate) &&
              isFilter === true
                ? "day__container day-active"
                : "day__container"
            }
            key={date.id}
            onClick={() => {
              matchFilter({
                matchDateFirst: date.matchDateFirst,
                matchDateSecond: date.matchDateSecond,
                matchDateThird: date.matchDateThird,
                isFilter: isFilter,
              });
              setIsFilter(true);
            }}
          >
            <div
              className={
                (date.matchDateFirst === matchDate ||
                  date.matchDateSecond === matchDate ||
                  date.matchDateThird === matchDate) &&
                isFilter === true
                  ? "month__box month-active"
                  : "month__box"
              }
            >
              <span>{date.month}월</span>
            </div>
            <div
              className={
                (date.matchDateFirst === matchDate ||
                  date.matchDateSecond === matchDate ||
                  date.matchDateThird === matchDate) &&
                isFilter === true
                  ? "day__box day-box-active"
                  : "day__box"
              }
            >
              <span className="day__box--date">
                <strong>{date.date}</strong>
              </span>
              <span className="day__box--day">{date.day}</span>
            </div>

            <RhombusContainer
              containerStyle={{
                display: "flex",
                marginRight: "3px",
                color: "#D2D2D2",
                top: "0",
              }}
              rhombusStyle={{ marginRight: "3px", backgroundColor: "#C1C1C1" }}
              matchCount={date.matchCount}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Date;
